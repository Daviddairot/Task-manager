const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://david:190304%2D1993@cluster0.5jb2j51.mongodb.net/taskM?retryWrites=true&w=majority';

mongoose
  .connect(connectionString)
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));
