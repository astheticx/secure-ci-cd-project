const API_URL = "http://localhost:3000";

// Load tasks on start
async function loadTasks() {
    const response = await fetch(API_URL + "/tasks");
    const tasks = await response.json();

    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach(task => {
        let li = document.createElement("li");
        li.innerText = task;
        list.appendChild(li);
    });
}

// Add new task
async function addTask() {
    const input = document.getElementById("taskInput");

    if (input.value.trim() === "") return alert("Enter a task!");

    await fetch(API_URL + "/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task: input.value })
    });

    input.value = "";
    loadTasks();
}

loadTasks();
