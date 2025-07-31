const mongoose = require("mongoose");
const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@cluster0.cvlwqch.mongodb.net/taskManagementDB?retryWrites=true&w=majority&appName=Cluster0`
const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;