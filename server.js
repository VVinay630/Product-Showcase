const express = require("express")
const app = express();
const cors= require("cors")
const mongoose = require('mongoose');
app.get('/',(req,res)=>{
    res.send("Hello from server")
}
)
const DB = async ()=>{
    await mongoose.connect('mongodb+srv://Vinay:Vinay630@cluster0.fzadce0.mongodb.net/?retryWrites=true&w=majority').then(()=>{console.log("connected to database...")}
    ).catch(
        (err)=>{console.log("An error occured while connecting to database..")}
    )
}
DB();


app.listen(8050,()=>{console.log("Server is running...")})