import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/keyboard';

const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  spaceBetween: 40,
  slidesPerView: 1,
  loop: true,
  preventClicks: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.juri-swiper__button--next',
    prevEl: '.juri-swiper__button--prev',
  },
  breakpoints: {
    320: {
      allowTouchMove: true,
      initialSlide: 2,
      slidesPerView: 1,
    },
    768: {
      allowTouchMove: true,
      initialSlide: 0,
      slidesPerView: 2,
    },
    1440: {
      allowTouchMove: false,
      slidesPerView: 4,
    },
  },
});

const removeFocusSlides = () => {
  const slides = document.querySelectorAll('.swiper-slide');

  slides.forEach((element) => {
    element.removeAttribute('tabindex');
  });
};

const addFocusVisibleSlides = () => {
  const visibleSlides = document.querySelectorAll('.swiper-slide-visible');

  visibleSlides.forEach((element) => {
    element.setAttribute('tabindex', 0);
  });
};

const updateFocusVisibleElements = () => {
  removeFocusSlides();
  addFocusVisibleSlides();
};

const initSwiper = () => {
  swiper.on('afterInit', addFocusVisibleSlides());
  swiper.on('transitionEnd', () => {
    swiper.updateSlidesClasses();
    updateFocusVisibleElements();
  });

  swiper.init();
};

export { initSwiper };
