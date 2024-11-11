const express = require('express');
const router = express.Router();

const { getAllTasks } = require('../controller/task');
const {createTask} =  require('../controller/task.js');


// Define the route correctly
router.get('/', getAllTasks);
router.post('/create', createTask);


module.exports = router;


