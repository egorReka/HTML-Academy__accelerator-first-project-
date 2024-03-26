import { ASKED_QUESTIONS } from './data.js';

const categoriesContainer = document.querySelector('.faq-categories');
const faqList = document.querySelector('.faq-list');
const faqLabel = faqList.querySelectorAll('.faq-list__checkbox ~ label');
const faqCheckboxs = faqList.querySelectorAll('.faq-list__content-wrapper p');

const changCategory = (evt) => {
  const targetCategories = evt.target.value;

  for (let i = 0; i < ASKED_QUESTIONS[targetCategories].length; i++) {
    const { question, answer } = ASKED_QUESTIONS[targetCategories][i];

    faqLabel[i].childNodes[0].textContent = question;
    faqCheckboxs[i].textContent = answer;
  }
};

const InitSelectFaq = () => {
  categoriesContainer.addEventListener('change', changCategory);
};

export { InitSelectFaq };
