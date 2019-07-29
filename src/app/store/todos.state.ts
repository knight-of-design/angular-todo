import { Action, State, StateContext } from '@ngxs/store';
import { Todo } from '../models/todo.model';
import { TodoAction } from './todo.actions';

@State<Todo[]>({
  name: 'todoList',
  defaults: [{ action: 'foo'}]
})
export class TodoListState {
  @Action(TodoAction.Add)
  addTodo(ctx: StateContext<Todo[]>, action: TodoAction.Add) {
    const state = ctx.getState(); // always returns the freshest slice of state
    ctx.setState([
      ...state,
      action.todo
    ]);
  }

  @Action(TodoAction.Load)
  loadTodos(ctx: StateContext<Todo[]>, action: TodoAction.Load) {
    const state = ctx.getState(); // always returns the freshest slice of state
    ctx.setState([
      ...action.todos
    ]);
  }

}