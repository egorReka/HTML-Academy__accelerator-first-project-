import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';

import { initVideo } from './video.js';
import { initSelectPrice } from './select-price.js';
import { initJuriSwiper } from './juri-swiper.js';
import { initAccordion } from './accordion.js';
import { initReviewsSwiper } from './reviews-swiper.js';
import { validateForm } from './validate-form.js';

initVideo();
initSelectPrice();
initJuriSwiper(Swiper, Navigation);
initReviewsSwiper(Swiper, Navigation);
initAccordion();
validateForm();
