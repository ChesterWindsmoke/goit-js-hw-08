import throttle from 'lodash.throttle';

// Знаходимо форму
const feedbackForm = document.querySelector('.feedback-form');
// Знаходимо інпут
const inputEl = document.querySelector('[name="email"]');
// Знаходимо message
const messageEl = document.querySelector('[name="message"]');
// Знаходимо кнопку
const buttonEl = document.querySelector('[type="submit"]');

// Зберігаємо в LocalStorage поточні значення полів
const localStorageData = throttle(() => {
    localStorage.setItem('feedback-form-state', JSON.stringify({
        email: inputEl.value,
        message: messageEl.value
    }));
}, 500);

// Під час завантаження сторінки перевіряємо стан сховища,
// і якщо там є збережені дані, заповнюємо ними поля форми.
// В іншому випадку поля повинні бути порожніми.
window.addEventListener('DOMContentLoaded', () => {
    const storedData = localStorage.getItem('feedback-form-state');
    if (storedData) {
        const formData = JSON.parse(storedData);
        inputEl.value = formData.email;
        messageEl.value = formData.message;
    }
});

// Встановлюємо прослуховувач події input
feedbackForm.addEventListener('input', localStorageData);

// Під час сабміту форми очищуємо сховище і поля форми,
// а також виводимо у консоль об'єкт з полями email, message
// та їхніми поточними значеннями.
feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Щоб уникнути перезавантаження сторінки
    const formData = {
        email: inputEl.value,
        message: messageEl.value
    };
    console.log(formData);

    localStorage.removeItem('feedback-form-state');
    inputEl.value = '';
    messageEl.value = '';
});

