const Task=require('../models/tasks')


const createTask=async(req,res)=>{
    try {
        const task=await Task.create(req.body)
        res.status(200).json({task})    
    } catch (error) {
        console.log(error)
    }
    
}

const updateTask=async(req,res)=>{
    try {
        const {id:taskID}=req.params
        const task=await Task.findOneAndUpdate({_id:taskID},req.body)
        res.status(200).json({task})    
    } catch (error) {
        console.log(error)
    }
    
}

const getTask=async(req,res)=>{
    try {
        const {id:taskID}=req.params
        const task=await Task.findOne({_id:taskID})
        res.status(200).json({task})    
    } catch (error) {
        console.log(error)
    }
    
}

const getAllTask=async(req,res)=>{
    try {
        const tasks=await Task.find({})
        res.status(201).json({tasks})
    } catch (error) {
        console.log(error)
    }
    
}

const deleteTask=async(req,res)=>{
    try {
        const {id:taskID}=req.params
        const task=await Task.findOneAndDelete({_id:taskID})
        res.status(200).json({task,msg:"Task destroyed"})    
    } catch (error) {
        console.log(error)
    }
    
}

module.exports={
    createTask,updateTask,getTask,getAllTask,deleteTask
}