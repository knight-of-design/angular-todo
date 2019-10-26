import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Todo } from '../models/todo.model';
import { TodoAction } from './todo.actions';
import truly from '@truly.js/awesomeness';
import '@truly.js/awesomeness/built/boolean-awesomeness/and';
import '@truly.js/awesomeness/built/boolean-awesomeness/is';

@State<Todo[]>({
  name: 'todoList',
  defaults: [{ action: 'foo'}]
})
export class TodoListState {
  @Selector()
  static getTodosToBegin(state: Todo[]) {
    return state.filter(t => truly(t.progress).is(0).then(true));
  }

  @Selector()
  static getTodosInProgress(state: Todo[]) {
    return state.filter(todo => truly(todo.progress > 0).and(todo.progress < 100).then(true));
  }

  @Selector()
  static getTodosBeenFinished(state: Todo[]) {
    return state.filter(t => truly(t.progress).is(100).then(true));
  }

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
