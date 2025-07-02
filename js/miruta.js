window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("abajo", window.scrollY > 0);
});

const form = document.getElementById("formBusqueda");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const origen = document.getElementById("origen").value;
  const destino = document.getElementById("destino").value;

  if (!origen || !destino) {
    alert("Por favor, completa ambos campos.");
    return;
  }

  const params = new URLSearchParams({
    origen: origen,
    destino: destino,
  });

  window.location.href = `mapa/mapa.html?${params.toString()}`;
});
