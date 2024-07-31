import "./styles.css";
import Logo from "./images/codigotipado_logo.png";

const taskInput = document.getElementById("taskInput") as HTMLInputElement;
const taskList = document.getElementById("taskList") as HTMLUListElement;
const logoImg = document.getElementById("logoImg") as HTMLImageElement;

// Set the src attribute of the logo image
logoImg.src = Logo;

function addTask(): void {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const li = document.createElement("li");
    li.className = "task-item";
    li.innerHTML = `
            <input type="checkbox" onclick="toggleTask(this)" class="task-checkbox">
            <span class="task-text">${taskText}</span>
            <button onclick="deleteTask(this)" class="task-delete">
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
              </svg>
            </button>
        `;
    taskList.appendChild(li);
    taskInput.value = "";
  }
}

function toggleTask(checkbox: HTMLInputElement): void {
  const taskText = checkbox.nextElementSibling as HTMLSpanElement;
  taskText.classList.toggle("completed");
}

function deleteTask(button: HTMLButtonElement): void {
  const li = button.closest(".task-item");
  if (li) {
    li.classList.add("opacity-0");
    setTimeout(() => li.remove(), 300);
  }
}

// Expose functions to window object
(window as any).addTask = addTask;
(window as any).toggleTask = toggleTask;
(window as any).deleteTask = deleteTask;

taskInput.addEventListener("keyup", (event: KeyboardEvent) => {
  if (event.key === "Enter") {
    addTask();
  }
});
