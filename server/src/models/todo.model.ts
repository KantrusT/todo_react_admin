import { model, Schema, Document } from 'mongoose';
import { Todo } from '../interfaces/todo.interface';

const todoSchema: Schema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
    ref: 'Todo',
    required: false,
    index: true,
  },
  content: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
});

const ToDoModel = model<Todo & Document>('todo', todoSchema);
const todo = new ToDoModel({
  content: 'Do the dishes',
    completed: false,
});
todo.save();

export default ToDoModel;