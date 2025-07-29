const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const helmet = require("helmet")
const cookieParser = require("cookie-parser")
const connectDB = require("./config/bd")


dotenv.config();
const app = express()

// DB connection
connectDB()

// middleware

app.use(cors({
    origin:process.env.CLIENT_URL,
    credentials:true
}));

app.use(helmet());
app.use(express.json())
app.use(cookieParser());


app.get('/', async (req,res)=> {
    res.send("server is running")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log(`server running on port ${PORT}`))