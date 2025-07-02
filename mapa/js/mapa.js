window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("abajo", window.scrollY > 0);
});

document.addEventListener('DOMContentLoaded', function () {
  const mapa = L.map('mapa').setView([-16.3989, -71.535], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap',
  }).addTo(mapa);

  let routingControl = null;
  const form = document.querySelector('.formulario__ruta');
  const origenInput = document.getElementById('origen');
  const destinoInput = document.getElementById('destino');

  // Detecta ubicación del usuario
  mapa.locate({ setView: true, maxZoom: 15 });
  mapa.on('locationfound', function (e) {
    L.marker(e.latlng).addTo(mapa).bindPopup("Tu ubicación actual").openPopup();
  });
  mapa.on('locationerror', function () {
    console.log("No se pudo obtener tu ubicación.");
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const origen = origenInput.value;
    const destino = destinoInput.value;

    if (!origen || !destino) {
      alert('Por favor, completa ambos campos.');
      return;
    }

    Promise.all([
      fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(origen)}&limit=1`).then(res => res.json()),
      fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(destino)}&limit=1`).then(res => res.json())
    ]).then(([dataOrigen, dataDestino]) => {
      if (dataOrigen.length === 0 || dataDestino.length === 0) {
        alert('No se pudo encontrar una dirección válida.');
        return;
      }

      const origenCoord = [parseFloat(dataOrigen[0].lat), parseFloat(dataOrigen[0].lon)];
      const destinoCoord = [parseFloat(dataDestino[0].lat), parseFloat(dataDestino[0].lon)];

      if (routingControl) mapa.removeControl(routingControl);

      routingControl = L.Routing.control({
        waypoints: [
          L.latLng(...origenCoord),
          L.latLng(...destinoCoord)
        ],
        routeWhileDragging: false,
        language: 'es',
      }).addTo(mapa);

      mapa.setView(origenCoord, 14);
    });
  });

  // Leer parámetros en la URL
  const params = new URLSearchParams(window.location.search);
  const origenParam = params.get('origen');
  const destinoParam = params.get('destino');

  if (origenParam && destinoParam) {
    origenInput.value = origenParam;
    destinoInput.value = destinoParam;
    form.dispatchEvent(new Event('submit'));
  }
});
