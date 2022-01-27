const express = require("express");
const  mongoose  = require("mongoose");
const dotenv = require("dotenv");
const router = require("./routes/news_api_route");

const app = express();
const port= process.env.PORT || 4000;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))
dotenv.config();
app.use('/news',router)


app.listen(port, ()=>{
    console.log(`server created at ${port}`)
});