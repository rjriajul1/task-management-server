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


const getTasks = async (req, res) => {
  
  try {
    const tasks = await Task.find();
   res.send(tasks)
  } catch (err) {
    res.status(500).json({ message: "Error fetching user", error: err });
  }
};

const getSingleTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createTask,
  getTasks,
  getSingleTask
};
