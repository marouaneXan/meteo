const express = require("express");
require("dotenv").config();
const cors = require("cors");

//mongodb connection
const connectDB = require("./Config/db");
connectDB();
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.listen(PORT,()=>{console.log("Server running at the PORT " + PORT)})
