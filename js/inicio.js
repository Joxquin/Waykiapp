let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

function slideNext() {
  let items = document.querySelectorAll('.item');
  document.querySelector('.slide').appendChild(items[0]);
}

function slidePrev() {
  let items = document.querySelectorAll('.item');
  document.querySelector('.slide').prepend(items[items.length - 1]);
}

next.addEventListener('click', slideNext);
prev.addEventListener('click', slidePrev);

// Auto-slide cada 6 segundos
setInterval(slideNext, 6000);
