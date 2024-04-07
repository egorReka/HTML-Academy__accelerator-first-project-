const initReviewsSwiper = (Swiper, Navigation) => {
  const setSwiper = new Swiper('.reviews-swiper__container', {
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

  return setSwiper.init();
};

export { initReviewsSwiper };
