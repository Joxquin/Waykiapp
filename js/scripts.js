// Cambia el color y tamaño del header cuando se hace scroll
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("abajo", window.scrollY > 0);
});
