console.log('Интерактивная страница подключена');
// Задача 1.
const container = document.querySelector('#container');

const newParagraph = document.createElement('p');

const neewParagraph = document.createElement('p');

const skills = document.createElement('h3');

newParagraph.textContent =
 'Этот абзац создан с помощью JavaScript';

 neewParagraph.textContent = 
 'Максон ИС-1-25';

 skills.textContent =
 'Мои навыки';

 container.append(newParagraph);
 container.append(neewParagraph);
 container.append(skills);

 skills.style.color = "blue";

// Задача 2. Список дел

const taskInput = document.querySelector('#task-input');
const addTaskBtn = document.querySelector('#add-task');
const taskList = document.querySelector('#task-list');

addTaskBtn.addEventListener('click', function () {

  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Введите название задачи');
    return;
  }

  const li = document.createElement('li');
  li.textContent = taskText + ' ';
  
  const doneBtn = document.createElement('button');
  doneBtn.textContent= 'Выполнено';

  doneBtn.addEventListener('click', function () { 
    li.classList.toggle('completed'); 
    li.style.color = "green"
    }); 

li.append(doneBtn);

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Удалить';

  deleteBtn.addEventListener('click', function () {
    li.remove();
  });

  li.append(deleteBtn);
  taskList.append(li);

  taskInput.value = '';
});

// Задача 3. Аккордеон

const questions = document.querySelectorAll('.question');

for (const question of questions) {

  question.addEventListener('click', function () {

    const answer = question.nextElementSibling;

    answer.style.backgroundColor = "lime";

    answer.classList.toggle('open');

  });

}

// Задача 4. Слайдер

const images = [
    'https://i.pinimg.com/736x/7c/b6/97/7cb697978e16bfb26f404c5d9a89eb44.jpg',
    'https://i.pinimg.com/736x/e0/6e/be/e06ebe372c1bf5fab08caf6f7423d40b.jpg',
    'https://i.pinimg.com/736x/21/6a/65/216a6552fc6767d81433145c7036c1d5.jpg',
    'https://i.pinimg.com/736x/fb/c8/aa/fbc8aa7dae798f6edf4176af02c1e5ba.jpg',
    'https://i.pinimg.com/736x/cc/2f/7b/cc2f7bdc5056bea16994482fcff18b87.jpg'
  ];
  
  let currentSlide = 0;
  
  const sliderImage = document.querySelector('#slider-image');

  sliderImage.style.border = '10px solid darkred';
  
  const slideNumber = document.querySelector('#slide-number');
  
  const nextBtn = document.querySelector('#next-slide');
  
  const prevBtn = document.querySelector('#prev-slide');
  
  function showSlide() {
    sliderImage.src = images[currentSlide];
  
    slideNumber.textContent =
      `Слайд ${currentSlide + 1} из ${images.length}`;
  }
  
  nextBtn.addEventListener('click', function () {
    currentSlide++;
  
    if (currentSlide >= images.length) {
      currentSlide = 0;
    }
  
    showSlide();
  });
  
  prevBtn.addEventListener('click', function () {
    currentSlide--;
  
    if (currentSlide < 0) {
      currentSlide = images.length - 1;
    }
  
    showSlide();

  });
  
  showSlide();



  










 