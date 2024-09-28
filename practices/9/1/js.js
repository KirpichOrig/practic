'use strict';

const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const yearInput = document.getElementById('yearOfBirth');
const nameError = document.getElementById('nameError');
const yearError = document.getElementById('yearError');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Очистка предыдущих ошибок и сообщений
  nameError.textContent = '';
  yearError.textContent = '';
  successMessage.textContent = '';
  nameInput.classList.remove('error-border');
  yearInput.classList.remove('error-border');

  let hasError = false;
  const currentYear = new Date().getFullYear();
  const name = nameInput.value.trim();
  const yearOfBirth = yearInput.value.trim();

  // Валидация имени
  if (name === '') {
    nameError.textContent = 'Имя не должно быть пустым';
    nameInput.classList.add('error-border');
    hasError = true;
  } else if (name.length < 2) {
    nameError.textContent = 'Имя должно содержать не менее 2 символов';
    nameInput.classList.add('error-border');
    hasError = true;
  }

  // Валидация года рождения
  if (yearOfBirth === '') {
    yearError.textContent = 'Год рождения не должен быть пустым';
    yearInput.classList.add('error-border');
    hasError = true;
  } else if (yearOfBirth.length !== 4 || isNaN(yearOfBirth)) {
    yearError.textContent = 'Год рождения должен содержать ровно 4 цифры';
    yearInput.classList.add('error-border');
    hasError = true;
  } else {
    const age = currentYear - parseInt(yearOfBirth, 10);
    if (age < 18) {
      yearError.textContent = 'Вам должно быть не менее 18 лет';
      yearInput.classList.add('error-border');
      hasError = true;
    }
  }

  // Если ошибок нет, выводим сообщение об успехе
  if (!hasError) {
    successMessage.textContent = 'Форма успешно отправлена!';
    form.reset();
  }
});