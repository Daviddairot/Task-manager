const mongoose = require('mongoose');


const TaskSchema = new mongoose.Schema({
    name:String,
    completed:Boolean
})

mongoose.exports = mongoose.model('Task', TaskSchema)