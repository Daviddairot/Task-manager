const express = require('express');
const app = express();
const tasks = require('./routes/task.js');
const port = process.env.PORT || 4000;
const connectDB = require('./db/connect.js')
require('dotenv').config()

// Middleware
app.use(express.json());

// Home route
app.get('/', (req, res) => {
  res.send('Hello world');
});

// Registering the tasks route
app.use('/api/v1/tasks', tasks);

// Start the server
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log('Connected to MongoDB successfully');
    app.listen(port, () => console.log(`Server running on http://localhost:${port}/`));
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  } 
};

start();
// }
// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}/`);
// });
