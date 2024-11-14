const Task = require('../models/Task')


const getAllTasks = (req, res) => {
    res.send('Hello world')
}

const createTask = async (req, res) => {
    try {
      const task = await Task.create(req.body)
      res.status(201).json({ task })
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

const getTask = (req, res) =>{
    res.json({id:req.params.id})
}

const updateTask = (req, res) => {
    res.send('update your task')
}

const deleteTask = (req, res) =>  {
    res.send('this is the delete')
}

module.exports = {
    getAllTasks, createTask, getTask, updateTask, deleteTask,
}