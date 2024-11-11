const getAllTasks = (req, res) => {
    res.send('Hello world')
}

const createTask = (req, res) => {
    res.send('this is the post side')
}

const getTask = (req, res) =>{
    res.send('get single content')
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