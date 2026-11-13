console.log('Проверка формы подключена'); 

// Задача 1 Проверка имени
// Задача 2 Проверка Email И пароля

const form = document.querySelector('#registration-form');
const nameInput = document.querySelector('#student-name');
const emailInput = document.querySelector('#student-email');
const passwordInput = document.querySelector('#student-password');
const result = document.querySelector('#result');
const groupInput = document.querySelector('#student-group');
const langInput = document.querySelector('#student-lang');

form.addEventListener('submit', function (event) {

  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const group = groupInput.value.trim();
  const password = passwordInput.value;

  // Задача 1. Проверка имени

  if (name === '') {
    result.textContent = 'Введите имя';
    result.className = 'error';
    return;
  }
  if (name.length < 2) { 
    result.textContent = 'Имя слишком короткое'; 
    result.className = 'error'; 
    return; 
  } 

  // Задача 2
  if (!email.includes('@') || !email.includes('.') || email.value === '') {
    result.textContent = 'неверный Email';
    result.className = 'error';
    return;
  }

  if (password.length < 6) {
    result.textContent = 'Пароль слишком короткий'
    result.className = 'error'
    return;
  }
  if (group === '') {
    result.textContent = 'Введите группу';
    result.className = 'error';
    return;
  }

  result.textContent = `Данные проверены. Привет, ${name}!. Ваш email: ${email}`;
  result.className = 'success'
})

// Задача 3

const saveBtn = document.querySelector('#save-name');
const showBtn = document.querySelector('#show-name');
const deleteBtn = document.querySelector('#delete-name');
const savedResult = document.querySelector('#saved-result');
const saveGroupBtn = document.querySelector('#save-group');
const showGroupBtn = document.querySelector('#show-group');

const saveLangBtn = document.querySelector('#save-lang');
const showLangBtn = document.querySelector('#show-lang');
const deleteLangBtn = document.querySelector('#delete-lang');
const langResult = document.querySelector('#lang-result');
const deleteGroup = document.querySelector('#delete-group-btn');


saveBtn.addEventListener('click', function() {
    const name = nameInput.value.trim();

    if (name === '') {
        savedResult.textContent = 'Сначала введите имя';
        return;
    }

    localStorage.setItem('studentName', name);
    savedResult.textContent = 'Имя сохранено';


});

showBtn.addEventListener('click', function() {
    const name = localStorage.getItem('studentName');

    if (name === null) {
        savedResult.textContent = 'Имя не сохранено';
    } else {
        savedResult.textContent = 'Ваше имя: ' +  name;
    }
}) 

deleteBtn.addEventListener('click',function() {
    localStorage.removeItem('studentName');
    savedResult.textContent = 'Имя удалено'
})

saveGroupBtn.addEventListener('click', function() {
    const group = groupInput.value.trim();

    if (group === '') {
        savedResult.textContent = 'Сначала введите группу';
        return;
    }

    localStorage.setItem('studentGroup', group);
    savedResult.textContent = 'Группа сохранена';


});

showGroupBtn.addEventListener('click', function() {
    const group = localStorage.getItem('studentGroup');

    if (group === null) {
        savedResult.textContent = 'Группа не сохранена';
    } else {
        savedResult.textContent = 'Ваша группа: ' +  group;
    }
});
deleteGroup.addEventListener('click', function() {
    localStorage.removeItem('studentGroup');
    savedResult.textContent = 'Группа удалена';
});

// Задача 4

const themeBtn = document.querySelector('#theme-btn');

// Проверяем сохранённую тему
const theme = localStorage.getItem('theme');

if (theme === 'dark') {
  document.body.classList.add('dark');
  document.body.style.backgroundColor = 'black'
  document.body.style.color = 'white'
}

// Переключаем тему при нажатии

themeBtn.addEventListener('click', function () {

  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
  } else {
    localStorage.setItem('theme', 'light');
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
  }

});



saveLangBtn.addEventListener('click', function() {
    const lang = langInput.value.trim();

    if (lang === '') {
        langResult.textContent = 'Сначала введите язык';
        return;
    }

    localStorage.setItem('studentLang', lang);
    langResult.textContent = 'Язык сохранен';


});

showLangBtn.addEventListener('click', function() {
    const lang = localStorage.getItem('studentLang');

    if (lang === null) {
        langResult.textContent = 'Язык не сохранен';
    } else {
        langResult.textContent = 'Ваш любимый язык: ' +  lang;
    }
}) 

deleteLangBtn.addEventListener('click',function() {
    localStorage.removeItem('studentLang');
    langResult.textContent = 'Язык удален'
})
