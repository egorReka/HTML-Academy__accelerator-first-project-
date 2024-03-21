import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';

const initJuriSwiper = () => {
  new Swiper('.swiper', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,
    navigation: {
      nextEl: '.juri-swiper__button--next',
      prevEl: '.juri-swiper__button--prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 4,
      },
    }
  });
};

export { initJuriSwiper };
