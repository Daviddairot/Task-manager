require('./db/connect.js')
const express = require('express');
const app = express();
const tasks = require('./routes/task.js');
const port = 4000;

// Middleware
app.use(express.json());

// Home route
app.get('/', (req, res) => {
  res.send('Hello world');
});

// Registering the tasks route
app.use('/api/v1/tasks', tasks);


// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
