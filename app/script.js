document.addEventListener("DOMContentLoaded", loadTasks);

function loadTasks() {
    fetch("/tasks")
        .then(res => res.json())
        .then(tasks => {
            const list = document.getElementById("taskList");
            list.innerHTML = "";
            tasks.forEach(t => {
                const li = document.createElement("li");
                li.textContent = t;
                list.appendChild(li);
            });
        });
}
