const Task = require("../models/Task");

// Create Task
createTask = async (req, res) => {
  try {
    const { title, description, date, category, status, email } = req.body;

    const newTask = await Task.create({ title, description, date, category, status, email });

    res.status(201).json({ message: "Task created successfully", task: newTask });
  } catch (error) {
    res.status(500).json({ message: "Failed to create task", error: error.message });
  }
};

module.exports = {
  createTask
};
