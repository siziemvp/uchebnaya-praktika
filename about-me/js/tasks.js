console.log('Скрипт подключен');
const fullName = 'Алексеев Максим';
const group = 'ИС-1-25';
let pagesCount = 5;
const isStudent = true;
console.log('Имя: ' + fullName);
console.log(`Группа: ${group}, страниц на сайте: ${pagesCount}`);
pagesCount = pagesCount + 1;
console.log(`После доработки страниц: ${pagesCount}`);
console.log('Студент:', isStudent);

console.log(typeof 42);
console.log(typeof 'текст');
console.log(typeof true);
let notSet;
console.log(typeof notSet);
console.log('5' + 5);
console.log('5' - 2);
console.log(5 + 5);
console.log(Number('12') + 3);
console.log(Number('abc'));
const width = 8;
const height = 5;
console.log('Площадь:', width * height);
console.log('Периметр:', 2 * (width + height));
const mark1 = 5;
const mark2 = 4;
const mark3 = 5;
const average = (mark1 + mark2 + mark3) / 3;
console.log('Средняя бала:', average.toFixed(2));
const totalMinutes = 135;
const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
console.log(`${totalMinutes} минут = ${hours} ч ${minutes} мин`);
const city = ' Чебоксары ';
console.log(city.length); 
console.log(city.trim().length); 
console.log(city.trim().toUpperCase()); 
const text = 'Практика по веб-разработке';
console.log(text.slice(0, 8));
console.log(text.includes('веб')); 
const greeting = `Привет, ${fullName}! Добро пожаловать на сайт.`;
console.log(greeting);
// ===== пара 23: условие и циклы ====.


const number = 17;

if (number % 2 === 0) { // если остаток в делении остается 0 - то четное : 10 делить на 2 = 5 . Остаток 0 - число четное
    console.log(number + ' - чётное');
} else {
    console.log(number + ' - нечётное');
}

if (number > 0) { 
    console.log('Положительное');
} else if (number < 0) { 
    console.log('Отрицательное');
} else { 
    console.log('Ноль');
}
const userNumber = Number(prompt('Введите целое число'));

if (Number.isNaN(userNumber)) {
    console.log('Это не число');
} else if (userNumber % 2 === 0) {
    console.log(userNumber + ' - чётное');
} else {
    console.log(userNumber + ' - нечётное');
}
const score = 78; 
let mark;

if (score >= 90) { 
    mark = 5;
} else if (score >= 75) { 
    mark = 4;
} else if (score >= 60) { 
    mark = 3;
} else { 
    mark = 2;
}

console.log(`Баллов: ${score}, оценка: ${mark}`);

const dayNumber = 3; 
let dayName;

switch (dayNumber) {
    case 1:
        dayName = 'понедельник';
        break;
    case 2:
        dayName = 'вторник';
        break;
    case 3:
        dayName = 'среда';
        break;
    case 4:
        dayName = 'четверг';
        break;
    case 5:
        dayName = 'пятница';
        break;
    case 6:
        dayName = 'суббота';
        break;
    case 7:
        dayName = 'воскресенье';
        break;
    default:
        dayName = 'такого дня нет';
}

console.log(`День ${dayNumber}: ${dayName}`);

const isWeekend = dayNumber === 6 || dayNumber === 7; 
console.log('Выходной:', isWeekend);

for (let i = 1; i <= 10; i++) {
    console.log(`7 * ${i} = ${7 * i}`);
}

const n = 5;
let sum = 0; 
let k = 1; 
while (k <= n) { 
    sum = sum + k; 
    k = k + 1; 
}

console.log(`Сумма чисел от 1 до ${n}: ${sum}`); 



let i = 1; 
const luckyNumber = 4;

while (i <= 10) {
    console.log(`${luckyNumber} * ${i} = ${luckyNumber * i}`);
    
    i++; 
}