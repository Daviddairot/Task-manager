const getAllTasks = (req, res) => {
    res.send('Hello world')
}

const createTask = (req, res) => {
    res.send('this is the post side')
}

module.exports = {
    getAllTasks, createTask,
}