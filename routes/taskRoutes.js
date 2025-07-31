const express = require("express");
const { createTask,getTasks, getSingleTask, deleteTask, markTaskAsDone, updateTaskStatus, updateTaskById } = require("../controllers/taskControllers");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();


router.post("/tasks", createTask);
router.get('/tasks',authMiddleware,getTasks)
router.get("/tasks/:id",authMiddleware,getSingleTask);
router.delete("/tasks/:id", deleteTask);
router.patch("/tasks/done/:id", markTaskAsDone);
router.patch("/tasks/:id", updateTaskStatus);
router.put("/tasks/:id", updateTaskById);

module.exports = router;
