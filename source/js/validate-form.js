const NAME_REGEX = /^[a-zA-Zа-яА-Я\s]{3,30}$/;
const PHONE_REGEX = /^((\+7|7|8)\s?(\(\d{3}\)|\d{3})\s?\d{3}(\s|-)?\d{2}(\s|-)?\d{2})$/;

const formContainer = document.querySelector('.form__wrapper');
const submit = formContainer.querySelector('.form__submit');

const validateField = (regex, field) => {
  const fieldValue = field.value;

  if (!regex.test(fieldValue)) {
    field.classList.add('form__input--error');
    submit.setAttribute('disabled', true);

    return;
  }

  field.classList.remove('form__input--error');
  submit.removeAttribute('disabled');
};

const validateForm = () => {
  formContainer.addEventListener('input', (evt) => {
    const field = evt.target;

    switch (field.name) {
      case 'name':
        validateField(NAME_REGEX, field);
        break;
      case 'phone':
        validateField(PHONE_REGEX, field);
        break;
    }
  });
};

export { validateForm };
