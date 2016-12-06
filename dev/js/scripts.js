var menuOpen = document.querySelector('.nav__toggle--open');
var menuClose = document.querySelector('.nav__toggle--close');
var menu = document.querySelector('.nav__wrapper');

menuOpen.addEventListener('click', function(e) {
  e.preventDefault();
  menu.classList.add('active');
});

menuClose.addEventListener('click', function(e) {
  e.preventDefault();
  menu.classList.remove('active');
});
