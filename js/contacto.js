// 1. Efecto del Header al hacer Scroll
// Cuando la ventana detecte un evento de 'scroll'
window.addEventListener("scroll", function () {
  // Selecciona el elemento <header>
  var header = document.querySelector("header");
  // Añade o quita la clase 'abajo' del header
  // Si window.scrollY es mayor que 0 (es decir, ya se hizo scroll), añade 'abajo'
  // Si window.scrollY es 0 (está al principio de la página), quita 'abajo'
  header.classList.toggle("abajo", window.scrollY > 0);
});


// 2. Captura de Datos del Formulario y Muestra en Consola
// Espera a que todo el contenido del HTML esté cargado antes de ejecutar
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el formulario usando su clase
    const formularioContacto = document.querySelector('.formulario-contacto');

    // Verifica si el formulario fue encontrado en la página
    if (formularioContacto) {
        // Añade un 'escuchador de eventos' para cuando el formulario se intente 'submit' (enviar)
        formularioContacto.addEventListener('submit', function(e) {
            // Previene el comportamiento por defecto del formulario (que recargaría la página)
            e.preventDefault();

            // Obtiene los valores de los campos del formulario usando sus IDs
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const titulo = document.getElementById('titulo').value;
            const mensaje = document.getElementById('mensaje').value;

            // Crea un objeto con los datos recogidos
            const datosFormulario = {
                nombre: nombre,
                email: email,
                titulo: titulo,
                mensaje: mensaje
            };

            // Imprime los datos del formulario en la consola del navegador
            console.log('Datos del formulario enviados:', datosFormulario);

            // Muestra una alerta al usuario
            alert('¡Formulario enviado! Revisa la consola del navegador (F12) para ver los datos.');

            // Opcional: Para limpiar el formulario después de enviar, descomenta la siguiente línea:
            // this.reset();
        });
    }
});