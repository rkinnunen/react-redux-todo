const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todos-backend');
mongoose.set('debug', true);
mongoose.Promose = Promise;

const todoSchema = new mongoose.Schema({
  todo: String
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;