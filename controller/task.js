const getAllTasks = (req, res) => {
    res.send('Hello world')
}

const createTask = (req, res) => {
    res.json(req.body)
}

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