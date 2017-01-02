//переключение слайдов по кнопкам предыдущий/следующий

var slides = document.querySelectorAll('.testimonials .slider__item');
var currentSlide = 0;

function nextSlide() {
          goToSlide(currentSlide+1);
        }

function previousSlide() {
          goToSlide(currentSlide-1);
        }

function goToSlide(n) {
          slides[currentSlide].classList.remove('slider__item--active');

          currentSlide = (n+slides.length)%slides.length;

          slides[currentSlide].classList.add('slider__item--active');
        }

var next = document.querySelector('.testimonials__next');
var previous = document.querySelector('.testimonials__prev');

next.onclick = function() {
      nextSlide();
    };

previous.onclick = function() {
      previousSlide();
    };


//переключение слайдов по контролам

var sliderControlsTestimonials = document.querySelectorAll('.testimonials .slider__control'); //все контролы testimonials
var allSlidesTestimonials = document.querySelectorAll('.testimonials .slider__item'); //все слайды testimonials

var sliderControlsPrices = document.querySelectorAll('.prices .slider__control'); //все контролы prices
var allSlidesPrices = document.querySelectorAll('.prices .slider__item'); //все слайды prices


function browseSlide(sliderControls, allSlides) {

  for (var i = 0; i < sliderControls.length; i++) {
    var sliderControl = sliderControls[i];

    sliderControl.addEventListener('click', function(event){
      event.preventDefault();

      //делаем активным текущий контрол

      var sliderControlsParent = this.parentElement;

      for (var i = 0; i < sliderControlsParent.children.length; i++) {
        sliderControlsParent.children[i].classList.remove('slider__control--active');
        //удаляем класс slider__control--active у всех контролов
      }

      this.classList.add('slider__control--active'); //добавляем класс к активному контролу

      //делаем активным текущий слайд

      var fullSlideLink = this.querySelector('a').href; //получаем url из тега а
      var slideLink = '#' + fullSlideLink.split('#')[1]; //вырезаем то, что после # и добавляем #

      var activeSlide = document.querySelector(slideLink);

      for (var i = 0; i < allSlides.length; i++) {
        allSlides[i].classList.remove('slider__item--active');
      }

      activeSlide.classList.add('slider__item--active');

    });
  }
}

browseSlide(sliderControlsTestimonials, allSlidesTestimonials); //вызов функции для переключения слайдов testimonials

browseSlide(sliderControlsPrices, allSlidesPrices); //вызов функции для переключения слайдов prices
