const express = require("express");
const path = require("path");

const app = express();
const tasks = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.post("/add", (req, res) => {
    tasks.push(req.body.task);
    res.redirect("/");
});

app.get("/tasks", (req, res) => {
    res.json(tasks);
});

app.listen(3000);
