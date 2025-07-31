const express = require("express");
const { createTask,getTasks, getSingleTask } = require("../controllers/taskControllers");
const router = express.Router();


router.post("/tasks", createTask);
router.get('/tasks',getTasks)
router.get("/tasks/:id", getSingleTask);

module.exports = router;
