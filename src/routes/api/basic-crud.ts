const { app } = require('../../index')  
const { Todo } = require('../../models/todo.model')
// Get all Todos
// app.get('/todos', async (req: Request, res: Response) => {
//   try {
//     const todos = await Todo.find();
//     // res.json(todos);
//   } catch (error) {
//     console.error('Error fetching todos:', error);
//     // res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // Get a specific ToDo by ID
// app.get('/todos/:id', async (req: Request, res: Response) => {
//   const { id } = req.params;

//   try {
//     const todo = await Todo.findById(id);
//     if (todo) {
//       res.json(todo);
//     } else {
//       res.status(404).json({ error: 'Todo not found' });
//     }
//   } catch (error) {
//     console.error('Error fetching todo:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // Create a new ToDo
// app.get('/todos', async (req: {body: {title: string, description: string}}, res: Response) => {
//     console.log("inside todos api")
//   const { title, description } = req.body;
//   try {
//     const newTodo = new Todo({
//       title,
//       description,
//     });

//     const savedTodo = await newTodo.save();
//     console.log(savedTodo);
//     // res.status(201).json(savedTodo);
//   } catch (error) {
//     console.error('Error creating todo:', error);
//     // res.status(500).send('Internal Server Error');
//   }
// });

// // Update a ToDo by ID
// app.put('/todos/:id', async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const { title, description, completed } = req.body;

//   try {
//     const updatedTodo = await Todo.findByIdAndUpdate(
//       id,
//       { title, description, completed },
//       { new: true }
//     );

//     if (updatedTodo) {
//       res.json(updatedTodo);
//     } else {
//       res.status(404).json({ error: 'Todo not found' });
//     }
//   } catch (error) {
//     console.error('Error updating todo:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // Delete a ToDo by ID
// app.delete('/todos/:id', async (req: Request, res: Response) => {
//   const { id } = req.params;

//   try {
//     const deletedTodo = await Todo.findByIdAndDelete(id);

//     if (deletedTodo) {
//       res.json(deletedTodo);
//     } else {
//       res.status(404).json({ error: 'Todo not found' });
//     }
//   } catch (error) {
//     console.error('Error deleting todo:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });
