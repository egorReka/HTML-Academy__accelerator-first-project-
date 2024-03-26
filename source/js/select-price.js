import { PRICE_OPTIONS } from './data.js';

const selectContainer = document.querySelector('.select-months');
const productsCards = document.querySelectorAll('.products-card');

const changesPrice = (evt) => {
  const numberMonths = +evt.target.value;

  productsCards.forEach((productCard) => {
    const valuePrice = productCard.querySelector('.products-card__term');
    const valueShadowPrice = productCard.querySelector('.products-card__price-shadow');
    const priceOption = +PRICE_OPTIONS[productCard.dataset.option];

    valuePrice.textContent = priceOption * numberMonths;
    valueShadowPrice.textContent = priceOption * numberMonths;
  });
};

const initSelectPrice = () => {
  selectContainer.addEventListener('change', changesPrice);
};

export { initSelectPrice };
