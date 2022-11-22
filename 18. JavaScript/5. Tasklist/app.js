// UI Variables
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const filter = document.querySelector("#filter");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");

// Load All Event Listeners
loadAllEventListeners();

// Load All Event Listeners
function loadAllEventListeners() {
    // DOM Load Event
    document.addEventListener("DOMContentLoaded", loadTasks);
    // Add New Task Event
    form.addEventListener("submit", addTask);
    // Delete Task
    taskList.addEventListener("click", deleteTask);
    // Clear Tasks
    clearBtn.addEventListener("click", clearTasks);
    // Filter Tasks
    filter.addEventListener("keyup", filterTasks);
}

// Load Tasks from LS to DOM
function loadTasks(e) {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.forEach(function (task) {
        // Create li Element
        const li = document.createElement("li");
        // Create Class of li Element
        li.className = "collection-item";
        // Append text node inside li
        li.appendChild(document.createTextNode(task));
        // create link element
        const link = document.createElement("a");
        // add attributes to link element
        link.className = "delete-item";
        // add font awesome icon 
        link.innerHTML = `<i class="fa fa-remove">X</i>`;
        // add link inside li element
        li.appendChild(link);
        // add li inside ul
        taskList.appendChild(li);
    })
}

// Add New Task
function addTask(e) {
    if (taskInput.value === "") {
        alert("Please Add Task");
    } else {
        // Create li Element
        const li = document.createElement("li");
        // Create Class of li Element
        li.className = "collection-item";
        // Append text node inside li
        li.appendChild(document.createTextNode(taskInput.value));
        // create link element
        const link = document.createElement("a");
        // add attributes to link element
        link.className = "delete-item";
        // add font awesome icon 
        link.innerHTML = `<i class="fa fa-remove">X</i>`;
        // add link inside li element
        li.appendChild(link);
        // add li inside ul
        taskList.appendChild(li);

        // Save to LS
        saveToLocalStorage(taskInput.value);
    }

    // Clear Input Field
    taskInput.value = "";

    e.preventDefault();
}

// Save to LS
function saveToLocalStorage(task) {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// function for deleting single task (Event Delegation)
function deleteTask(e) {
    if (e.target.parentElement.classList.contains("delete-item")) {
        if (confirm("Are you sure?")) {
            e.target.parentElement.parentElement.remove();

            // Delete from LS
            deleteFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

// Delete from LS
function deleteFromLocalStorage(taskItem) {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.forEach(function (task, index) {
        if (taskItem.firstChild.textContent === task) {
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Clear All Tasks
function clearTasks(e) {
    if (confirm("Are you sure?")) {
        // First (Slower) Method
        //taskList.innerHTML = "";

        // Second (Faster) Method
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }

        // Clear From LS
        clearAllFromLocalStorage();
    }
}

// Clear All Tasks From LS
function clearAllFromLocalStorage() {
    localStorage.clear();
}

// Filter tasks
function filterTasks(e) {
    const text = filter.value.toLowerCase();

    document.querySelectorAll(".collection-item").forEach(function (task) {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }
    })
}