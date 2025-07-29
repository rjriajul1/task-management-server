const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/bd");

// middleware

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(helmet());
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api/auth", require("./routes/authRoutes"));

app.get("/", async (req, res) => {
  res.send("server is running");
});

// DB connection
connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
