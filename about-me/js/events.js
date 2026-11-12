console.log('Обработчики событий подключены');

// Задача 1. обработка нажатия
const helloBtn = document.querySelector('#hello-btn');
const helloResult = document.querySelector('#hello-result');

helloBtn.addEventListener('click', function (){
    helloResult.textContent = 'Привет студент!';
    helloResult.style.color = 'green';
    helloBtn.textContent = 'Уже нажато'; 
})

// Задача 2. Счетчик

let count = 0;

const counter = document.querySelector('#counter');
const plusBtn = document.querySelector('#plus-btn');
const minusBtn = document.querySelector('#minus-btn');
const resetBtn = document.querySelector('#reset-btn');
const fiveBtn = document.querySelector('#five-btn')

plusBtn.addEventListener('click', function () {
    count += 1
    counter.textContent = count;
})

minusBtn.addEventListener('click', function () {
    count -= 1
    counter.textContent = count
})

resetBtn.addEventListener('click', function () {
    count = 0;
    counter.textContent = count
})

fiveBtn.addEventListener('click', function() {
    count += 10
    counter.textContent = count
})

// Задача 3. Ввод имени

const nameInput = document.querySelector('#name-input');
const nameResult = document.querySelector('#name-result');

nameInput.addEventListener('input', function(){
    const userName = nameInput.value.trim();
    if (userName === '') {
        nameResult.textContent = 'Введите ваше имя';
    } else {
        nameResult.textContent = `Привет, ${userName}! Количество символов: ${userName.length}`;
    }
});

// Задача 4. переключение оформления
const colorBox = document.querySelector('#color-box');
const colorBtn = document.querySelector('#color-btn');
const colorText = document.querySelector('#color-text');
let isBlue = false;

colorBtn.addEventListener('click', function() {
    if (isBlue === false) {
        colorBox.style.backgroundColor = 'lime';
        colorBox.style.color = 'black';
        isBlue = true;
        colorText.textContent = 'Цвет включен';

    } else {
        colorBox.style.backgroundColor = 'white';
        colorBox.style.color = 'black';
        isBlue = false;
        colorText.textContent = 'Цвет выключен';
    }
});

// Задача 5. Проверка формы
const feedbackForm = document.querySelector('#feedback-form');

const feedbackName = document.querySelector('#feedback-name');
const feedbackAge = document.querySelector('#feedback-age');

const formResult = document.querySelector('#form-result');

feedbackForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const userName = feedbackName.value.trim();
    const userAge = feedbackAge.value.trim();

    let strResult = ''

    if (userName === '') {
        formResult.textContent = 'Ошибка: введите имя';
        formResult.style.color = 'red';
    } else {
        strResult += `Спасибо, ${userName}!`
        formResult.style.color = 'green';
    }
    if(((userAge < 1) || (userAge > 100) || isNaN((Number(userAge)))) && (userName !== '')){
        formResult.textContent = `Неправильный возраст!(1-100)`;
        formResult.style.color = 'red';
    } else if (userName !== '' && userAge !== 0) {
        strResult += ` Ваш возраст: ${userAge}`
        formResult.style.color = 'green';
        formResult.textContent = strResult;
    }
})