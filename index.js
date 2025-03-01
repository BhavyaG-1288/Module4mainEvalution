const express =require("express");
const connectToDb = require("./config");
require('dotenv').config()
const app =express();
const PORT =process.env.SERVER_PORT

app.use(express.json());


app.listen(PORT, ()=>{
    connectToDb();
    console.log("Server started");
})