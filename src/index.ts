// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const { Todo } = require('./models/todo.model')
// Initialize Express app
export const app = express();
const port = 3000;

app.use(bodyParser.json())

// MongoDB connection string
// const mongoURI = 'mongodb://developer:Developer@123@atlascluster.hehkx7x.mongodb.net/todos.todos'
const mongoURI = 'mongodb+srv://developer:Developer%40123@atlascluster.hehkx7x.mongodb.net/?retryWrites=true&w=majority'; // Replace with your actual connection string

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check if connected to MongoDB successfully
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Handle MongoDB connection errors
mongoose.connection.on('error', (err: any) => {
  console.error(`MongoDB connection error: ${err}`);
});

app.get('/', async(req: any, res: any) => {
  res.json("Welcome to Todo app");
})
// Example route to interact with the database
// app.get('/todos', async (req: any, res: { json: (arg0: any) => void; status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: string; }): void; new(): any; }; }; }) => {
//   try {
//     // Fetch all Todos from the database
//     const todos = await Todo.find();
//     res.json(todos);
//   } catch (error) {
//     console.error('Error fetching todos:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// Create a new ToDo
app.post('/todos', async (req: {body: {title: string, description: string}}, res: {body: any, send: any}) => {
    console.log("inside todos api")
  const { title, description } = req.body;
  try {
    const newTodo = new Todo({
      title,
      description,
    });

    const savedTodo = await newTodo.save();
    console.log(savedTodo);
    res.send(savedTodo)
  } catch (error) {
    console.error('Error creating todo:', error);
    res.send('Internal Server Error');
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
