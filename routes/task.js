const express = require('express');
const router = express.Router();

const { getAllTasks, getTask, updateTask, deleteTask, } = require('../controller/task');
const {createTask} =  require('../controller/task.js');


// Define the route correctly
router.get('/', getAllTasks);
router.post('/create', createTask);
router.get('/:id', getTask).patch('/:id', updateTask).delete('/:id', deleteTask);

module.exports = router;