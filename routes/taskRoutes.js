const express = require("express");
const { createTask } = require("../controllers/taskControllers");
const router = express.Router();


router.post("/tasks", createTask);

module.exports = router;
