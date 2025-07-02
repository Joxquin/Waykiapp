const carrito = [];

function agregarAlCarrito() {
    const select = document.getElementById('bus');
    const viajeInput = document.getElementById('viajes');
    const linea = select.value;
    const precio = parseFloat(select.options[select.selectedIndex].dataset.precio);
    const cantidad = parseInt(viajeInput.value);

    if (!cantidad || cantidad <= 0) return alert("Ingresa un número válido de viajes.");

    const subtotal = precio * cantidad;

    carrito.push({ linea, precio, cantidad, subtotal });
    actualizarTabla();
    viajeInput.value = '';
}

function actualizarTabla() {
    const body = document.getElementById('carrito-body');
    body.innerHTML = "";

    let total = 0;

    carrito.forEach((item, index) => {
        total += item.subtotal;

        const fila = `
            <tr>
                <td>${item.linea}</td>
                <td>S/. ${item.precio.toFixed(2)}</td>
                <td>${item.cantidad}</td>
                <td>S/. ${item.subtotal.toFixed(2)}</td>
                <td><button onclick="eliminar(${index})">🗑️</button></td>
            </tr>
        `;
        body.innerHTML += fila;
    });

    document.getElementById('totalSinDesc').textContent = total.toFixed(2);

    let descuento = 0;
    if (total > 30) descuento = 0.10;
    const totalConDesc = total * (1 - descuento);

    document.getElementById('descuento').textContent = `${descuento * 100}%`;
    document.getElementById('totalPagar').textContent = totalConDesc.toFixed(2);
}

function eliminar(index) {
    carrito.splice(index, 1);
    actualizarTabla();
}

function pagar() {
    if (carrito.length === 0) return alert("Agrega al menos un viaje.");

    document.getElementById('mensajeExito').style.display = "block";
    carrito.length = 0;
    actualizarTabla();
}
// Cambia el color y tamaño del header cuando se hace scroll
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("abajo", window.scrollY > 0);
});
