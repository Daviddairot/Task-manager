const Task = require('../models/Task')


const getAllTasks = async (req, res) => {
    try {
      const alltasks = await Task.find({});
      res.status(201).json({ alltasks })
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}

const createTask = async (req, res) => {
    try {
      const task = await Task.create(req.body)
      res.status(201).json({ task })
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

const getTask = async (req, res) =>{
    try {
      const {id:taskID} = req.params
      const task = await Task.findOne({_id:taskID});
    if (!task) {
      return res.status(404).send({msg:`No task found with id : ${taskID}`}); 
    }
      res.status(200).json({ task });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  };

const updateTask = async (req, res) => {
  try {
    const {id:taskID} = req.params
    const updatedTask = await Task.findByIdAndUpdate(taskID, req.body, {new: true});
    if (!updatedTask) {
      return res.status(404).send({msg:`No task found with id : ${taskID}`}); 
    }
    res.status(200).json({ updatedTask });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
 };


const deleteTask = async (req, res) =>  {
  try {
    const {id:taskID} = req.params
    const task = await Task.findOneAndDelete({_id:taskID});
  if (!task) {
    return res.status(404).send({msg:`No task found with id : ${taskID}`}); 
  }
    res.status(200).json({ task });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

module.exports = {
    getAllTasks, createTask, getTask, updateTask, deleteTask,
}