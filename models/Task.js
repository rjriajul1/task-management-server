const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "pending",
    },
    email: {
      type: String,
      required: true,
    },
    points: {
      type: Number,
      default: 0,
    },
     photo: {
    type: String,      
    required: false, 
  }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);
