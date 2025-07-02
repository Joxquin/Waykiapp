window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
  });
  
  document.getElementById("formularioPasaje").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const nombre = document.getElementById("nombre").value;
    const origen = document.getElementById("origen").value;
    const destino = document.getElementById("destino").value;
    const fecha = document.getElementById("fecha").value;
    const cantidad = parseInt(document.getElementById("cantidad").value);
    const precio = parseFloat(document.getElementById("precio").value);
    const metodoPago = document.querySelector('input[name="pago"]:checked').value;
    const total = cantidad * precio;
  
    const boleta = `
      <h3>🚌 Boleta de Compra</h3>
      <p><strong>Cliente:</strong> ${nombre}</p>
      <p><strong>Ruta:</strong> ${origen} → ${destino}</p>
      <p><strong>Fecha:</strong> ${fecha}</p>
      <p><strong>Cantidad:</strong> ${cantidad} pasaje(s)</p>
      <p><strong>Precio unitario:</strong> S/ ${precio.toFixed(2)}</p>
      <p><strong>Método de pago:</strong> ${metodoPago}</p>
      <p><strong>Total:</strong> <span style="font-weight:bold;">S/ ${total.toFixed(2)}</span></p>
      <p style="text-align:center; margin-top:10px;">✅ ¡Compra realizada con éxito!</p>
    `;
  
    document.getElementById("boleta").innerHTML = boleta;
    document.getElementById("boleta").style.display = "block";
    document.getElementById("formularioPasaje").reset();
  });
  