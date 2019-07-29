import { State } from '@ngxs/store';
import { Todo } from '../models/todo.model';

@State<Todo>({
  name: 'todoCreator',
  defaults: {
    action: ''
  }
})
export class TodoCreatorState {}
