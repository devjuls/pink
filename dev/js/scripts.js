var menuToggle = document.querySelector('.nav__toggle');
var nav = document.querySelector('.nav');

nav.classList.remove('nav--nojs'); //удяляем класс nav--nojs, если js работает

menuToggle.addEventListener('click', function(e) {
  e.preventDefault();

  nav.classList.toggle('open');
});

