const express = require("express");
const dotenv = require("dotenv");

const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");
//dot config
dotenv.config();

//mongodb connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

const PORT=8080;

app.get("/",(req,res)=>{
    res.status(200).json({
        message: "wlcm to blood bank app",
    });
})
app.use("/api/v1/auth", require('./routes/authRoutes.js')); 

app.listen(PORT,()=>{
   console.log( "node server running");
})