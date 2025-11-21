const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let tasks = [];

// Home route
app.get("/", (req, res) => {
    res.send("Backend is running for Secure CI/CD Pipeline To-Do App!");
});

// Get all tasks
app.get("/tasks", (req, res) => {
    res.json(tasks);
});

// Add a task
app.post("/tasks", (req, res) => {
    const task = req.body.task;
    if (!task) {
        return res.status(400).json({ message: "Task is required" });
    }
    tasks.push(task);
    res.json({ message: "Task added successfully", tasks });
});

// Server start
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
