import express from "express"
import ejs from "ejs"
import mongoose from "mongoose"
import bodyParser from "body-parser"

// const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://nikhilkgupta265:Nikhil5979@cluster0.8oyo5q7.mongodb.net/").then(()=>{
    console.log(`congrats mongodb is connected`)
}).catch((err)=>{
    console.log(err)
})

const userschema=new mongoose.Schema({
    email:String,
    name:String

})

const Usermodel=new mongoose.model("contact",userschema)
const app=express()
const port=3000;

// static file location
app.use(express.static("public"))
// use body parser
app.use(bodyParser.urlencoded({extended:true}))
// routes
app.get("/",(req,res)=>{
    res.render("index.ejs")
})

app.post("/submit",(req,res)=>{

    const details=req.body
    console.log(details)

    const newdetails=new Usermodel(details)

    newdetails.save()





    res.send("thank you for your response")
})


app.listen(port,()=>{
    console.log(`Your server is working in ${port}`)
})