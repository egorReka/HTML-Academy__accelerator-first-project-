import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';

const reviewsSwiper = new Swiper('.reviews-swiper__container', {
  modules: [Navigation],
  spaceBetween: 40,
  slidesPerView: 1,
  initialSlide: 0,
  loop: false,
  preventClicks: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.reviews-swiper__button--next',
    prevEl: '.reviews-swiper__button--prev',
  },
  breakpoints: {
    768: {
      allowTouchMove: true,
    },
    1366: {
      allowTouchMove: false,
    },
  },
});

const initReviewsSwiper = () => {
  reviewsSwiper.init();
};

export { initReviewsSwiper };
