class Task {
    constructor(name, pinned = false) {
        this.name = name;
        this.pinned = pinned;
    }
}

const tasks = [
    new Task('Task 1'),
    new Task('Task 2'),
    new Task('Task 3'),
    new Task('Task 4'),
    new Task('Task 5')
];

const pinnedTasksList = document.getElementById('pinnedTasks');
const allTasksList = document.getElementById('allTasks');
const taskInput = document.getElementById('taskInput');

document.addEventListener('click', function(event) {
    const target = event.target;
    if (target.matches('.clickable')) {
        const taskName = target.textContent;
        const task = tasks.find(task => task.name === taskName);
        if (task) {
            toggleTask(task);
        }
    } else if (target.matches('.toggleButton')) {
        const taskName = target.parentElement.textContent;
        const task = tasks.find(task => task.name === taskName);
        if (task) {
            toggleTask(task);
        }
    }
});

function renderTasks() {
    pinnedTasksList.innerHTML = '';
    allTasksList.innerHTML = '';

    const filteredTasks = tasks.filter(task => task.name.toLowerCase().startsWith(taskInput.value.toLowerCase()));

    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task.name;

        if (!task.pinned) {
            li.classList.add('clickable');
        }

        const toggleButton = document.createElement('button');
        toggleButton.textContent = task.pinned ? 'Unpin' : 'Pin';
        toggleButton.classList.add('toggleButton');
        li.appendChild(toggleButton);

        if (task.pinned) {
            pinnedTasksList.appendChild(li);
        } else {
            allTasksList.appendChild(li);
        }
    });

    if (filteredTasks.length === 0 && taskInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = 'No tasks found';
        allTasksList.appendChild(li);
    }

    if (pinnedTasksList.children.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'No pinned tasks';
        pinnedTasksList.appendChild(li);
    }
}

function addTask() {
    const taskName = taskInput.value.trim();
    if (taskName !== '') {
        const newTask = new Task(taskName);
        tasks.push(newTask);
        taskInput.value = '';
        renderTasks();
    } else {
        alert('Please enter a task name');
    }
}

function toggleTask(task) {
    task.pinned = !task.pinned;
    renderTasks();
}

taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

renderTasks();
