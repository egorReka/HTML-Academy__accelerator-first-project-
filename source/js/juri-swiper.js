import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';

const juriSwiperContainer = document.querySelector('.juri-swiper');

const juriSwiper = new Swiper('.juri-swiper__container', {
  modules: [Navigation],
  spaceBetween: 40,
  slidesPerView: 1,
  initialSlide: 1,
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
    1366: {
      allowTouchMove: false,
      initialSlide: 0,
      slidesPerView: 4,
    },
  },
});

const removeFocusSlides = () => {
  const slides = juriSwiperContainer.querySelectorAll('.swiper-slide');

  slides.forEach((element) => {
    element.removeAttribute('tabindex');
  });
};

const addFocusVisibleSlides = () => {
  const visibleSlides = juriSwiperContainer.querySelectorAll('.swiper-slide-visible');

  visibleSlides.forEach((element) => {
    element.setAttribute('tabindex', 0);
  });
};

const updateFocusVisibleElements = () => {
  removeFocusSlides();
  addFocusVisibleSlides();
};

const initJuriSwiper = () => {
  juriSwiper.on('afterInit', addFocusVisibleSlides());
  juriSwiper.on('transitionEnd', () => {
    juriSwiper.updateSlidesClasses();
    updateFocusVisibleElements();
  });

  juriSwiper.init();
};

export { initJuriSwiper };
