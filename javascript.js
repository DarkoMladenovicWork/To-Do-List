const todoForm = document.getElementById('todo-form');
const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');
const priorityInput = document.getElementById('priority');
const taskList = document.getElementById('task-list');

todoForm.addEventListener('submit', addTask);

function addTask(e) {
  e.preventDefault();

  const title = titleInput.value;
  const description = descriptionInput.value;
  const priority = priorityInput.value;

  const taskItem = document.createElement('li');
  taskItem.innerHTML = `
    <span class="title">${title}</span>
    <span class="priority ${priority}-priority">${priority}</span>
    <button class="complete-btn">Completed</button>
  `;

  taskItem.querySelector('.complete-btn').addEventListener('click', completeTask);

  taskList.appendChild(taskItem);

  titleInput.value = '';
  descriptionInput.value = '';
}

function completeTask(e) {
  const taskItem = e.target.parentNode;
  taskItem.classList.toggle('completed');
}