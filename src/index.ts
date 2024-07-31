import "./styles.css";
import {
  getState,
  dispatch,
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  AppItem,
} from "./store";
import Logo from "./images/codigotipado_logo.png";

const taskInput = document.getElementById("taskInput") as HTMLInputElement;
const taskList = document.getElementById("taskList") as HTMLUListElement;
const logoImg = document.getElementById("logoImg") as HTMLImageElement;

// Set the src attribute of the logo image
logoImg.src = Logo;

function addTask(): void {
  const taskText = taskInput.value.trim();
  if (taskText) {
    dispatch({ type: ADD_TODO, payload: taskText });
    renderTodos();
    taskInput.value = "";
  }
}


function toggleTask(id: number): void {
  dispatch({ type: TOGGLE_TODO, payload: id });
  renderTodos();
}

function deleteTask(id: number): void {
  dispatch({ type: REMOVE_TODO, payload: id });
  renderTodos();
}

function renderTodos(): void {
  const state = getState();
  taskList.innerHTML = '';
  state.todos.forEach((todo: AppItem) => {
      const li = document.createElement('li');
      li.className = 'task-item';
      li.innerHTML = `
          <div class="flex items-center justify-center">
              <input type="checkbox" ${todo.completed ? 'checked' : ''} class="task-checkbox">
              <span class="task-text ${todo.completed ? 'completed' : ''}">${todo.text}</span>
          </div>
          <button class="task-delete">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
              </svg>
          </button>
      `;
      const checkbox = li.querySelector('input') as HTMLInputElement;
      checkbox.addEventListener('change', () => toggleTask(todo.id));
      const deleteButton = li.querySelector('.task-delete') as HTMLButtonElement;
      deleteButton.addEventListener('click', () => deleteTask(todo.id));
      taskList.appendChild(li);
  });
}

// Initialize the UI
renderTodos();

// Event listeners
document.getElementById('addTaskButton')?.addEventListener('click', addTask);
taskInput.addEventListener('keyup', (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
        addTask();
    }
});

// Export for global access (if needed)
(window as any).addTask = addTask;
(window as any).renderTodos = renderTodos;
