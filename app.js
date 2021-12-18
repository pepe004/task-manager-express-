const express=require('express')
const app=express()
const connectDB=require('./databases/db')
const task=require('./routes/tasks')
//direct require
require('dotenv').config()
//app.use
app.use(express.static('./public'))
app.use(express.json())
app.use('/api/v1/tasks',task)
//server
app.listen(5000,()=>{
    connectDB(process.env.DB_URL)
    console.log("Server are listen on 5000....")
})