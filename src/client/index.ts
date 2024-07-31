const taskInput = document.getElementById('taskInput') as HTMLInputElement;
const taskList = document.getElementById('taskList') as HTMLUListElement;

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const li = document.createElement('li');
    li.innerHTML = `
      <input type="checkbox" onclick="toggleTask(this)">
      <span>${taskText}</span>
      <button onclick="deleteTask(this)">Delete</button>
    `;
    taskList.appendChild(li);
    taskInput.value = '';
  }
}

function toggleTask(checkbox: HTMLInputElement) {
  const taskText = checkbox.nextElementSibling as HTMLSpanElement;
  taskText.classList.toggle('completed');
}

function deleteTask(button: HTMLButtonElement) {
  const li = button.parentElement;
  if (li) li.remove();
}

// Expose functions to window object
(window as any).addTask = addTask;
(window as any).toggleTask = toggleTask;
(window as any).deleteTask = deleteTask;

// Allow adding tasks with Enter key
taskInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});