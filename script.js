document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');
    const completedList = document.getElementById('completed-list');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(newTaskInput.value);
        newTaskInput.value = '';
    });

    function addTask(task) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task}</span>
            <button onclick="editTask(this)">Edit</button>
            <button onclick="completeTask(this)">Complete</button>
            <button onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(li);
    }

    window.completeTask = function (button) {
        const li = button.parentElement;
        li.classList.add('completed');
        completedList.appendChild(li);
        button.remove();
    };

    window.deleteTask = function (button) {
        const li = button.parentElement;
        li.remove();
    };

    window.editTask = function (button) {
        const li = button.parentElement;
        const span = li.querySelector('span');
        const taskText = span.textContent;
        li.classList.add('edit-mode');
        li.innerHTML = `
            <input type="text" value="${taskText}">
            <button onclick="saveTask(this)">Save</button>
            <button onclick="cancelEdit(this)">Cancel</button>
        `;
    };

    window.saveTask = function (button) {
        const li = button.parentElement;
        const input = li.querySelector('input');
        const newTaskText = input.value;
        li.classList.remove('edit-mode');
        li.innerHTML = `
            <span>${newTaskText}</span>
            <button onclick="editTask(this)">Edit</button>
            <button onclick="completeTask(this)">Complete</button>
            <button onclick="deleteTask(this)">Delete</button>
        `;
    };

    window.cancelEdit = function (button) {
        const li = button.parentElement;
        const input = li.querySelector('input');
        const taskText = input.value;
        li.classList.remove('edit-mode');
        li.innerHTML = `
            <span>${taskText}</span>
            <button onclick="editTask(this)">Edit</button>
            <button onclick="completeTask(this)">Complete</button>
            <button onclick="deleteTask(this)">Delete</button>
        `;
    };
});
