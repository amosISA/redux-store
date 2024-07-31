import './styles.css';
import Logo from './images/codigotipado_logo.png';

const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const logoImg = document.getElementById('logoImg');

logoImg.src = Logo;

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const li = document.createElement('li');
        li.className = 'task-item';
        li.innerHTML = `
            <input type="checkbox" onclick="toggleTask(this)" class="task-checkbox">
            <span class="task-text">${taskText}</span>
            <button onclick="deleteTask(this)" class="task-delete">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
            </button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function toggleTask(checkbox) {
    const taskText = checkbox.nextElementSibling;
    taskText.classList.toggle('completed');
}

function deleteTask(button) {
    const li = button.closest('.task-item');
    if (li) {
        li.classList.add('opacity-0');
        setTimeout(() => li.remove(), 300);
    }
}

window.addTask = addTask;
window.toggleTask = toggleTask;
window.deleteTask = deleteTask;

taskInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});