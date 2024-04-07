import { ASKED_QUESTIONS } from './data.js';

const categoriesContainer = document.querySelector('.faq-categories');
const faqList = document.querySelector('.faq-list');
const checkboxes = faqList.querySelectorAll('.faq-list__checkbox');
const questions = faqList.querySelectorAll('.faq-list__checkbox ~ label');
const answers = faqList.querySelectorAll('.faq-list__content-wrapper p');

const updateStatusCheckboxes = () => {
  const сategories = categoriesContainer.querySelectorAll('.faq-categories__radio');
  const storageStatus = [];

  сategories.forEach((сategory) => {
    const isCurrentCategory = сategory.checked === true;

    if (isCurrentCategory) {
      checkboxes.forEach((checkbox) => {
        storageStatus.push(checkbox.checked);
      });

      sessionStorage.setItem(сategory.value, storageStatus);
    }
  });
};

const closeСheckboxes = () => {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
};

const openSavedСheckboxes = (targetCategories) => {
  const isCategorySaved = sessionStorage.getItem(targetCategories);

  if (isCategorySaved) {
    checkboxes.forEach((checkbox, i) => {
      const savedStatus = JSON.parse(sessionStorage.getItem(targetCategories).split(',')[i]);

      checkbox.checked = savedStatus;
    });
  }
};

const changCategory = (evt) => {
  const targetCategories = evt.target.value;

  closeСheckboxes();
  openSavedСheckboxes(targetCategories);

  for (let i = 0; i < ASKED_QUESTIONS[targetCategories].length; i++) {
    const { question, answer } = ASKED_QUESTIONS[targetCategories][i];

    questions[i].childNodes[0].textContent = question;
    answers[i].textContent = answer;
  }
};

const initAccordion = () => {
  window.addEventListener('scroll', updateStatusCheckboxes, { once: true });

  categoriesContainer.addEventListener('change', changCategory);
  faqList.addEventListener('change', updateStatusCheckboxes);
};

export { initAccordion };
