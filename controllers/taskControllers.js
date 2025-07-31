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

// Delete task by id
deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete task", error: error.message });
  }
};



// Mark task as done and add points
markTaskAsDone = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      {
        status: "done",
        points: 20,
      },
      { new: true } 
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({
      message: "Task marked as done and points added",
      task: updatedTask,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update task status",
      error: error.message,
    });
  }
};


updateTaskStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const result = await Task.updateOne({ _id: id }, { $set: { status } });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to update status" });
  }
};


// PUT: Update full task by ID
updateTaskById = async (req, res) => {
  const { id } = req.params;
  const { title, description, date, category, status } = req.body;

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, description, date, category, status },
      { new: true, runValidators: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({
      message: "Task updated successfully",
      data: updatedTask,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to update task" });
  }
};
module.exports = {
  createTask,
  getTasks,
  getSingleTask,
  deleteTask,
  markTaskAsDone,
  updateTaskStatus,
  updateTaskById
};
