import { Injectable } from '@angular/core';
import {WebStorageService} from './web-storage/web-storage.service';
import {Todo} from '../models/todo.model';
import { Select, Store } from '@ngxs/store';
import { TodoListState } from '../store/todos.state';
import { Observable } from 'rxjs';
import { TodoAction } from '../store/todo.actions';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  @Select(TodoListState) todos$: Observable<Todo[]>;

  constructor(private webStorage: WebStorageService,
              private store: Store) {
    this.loadTodoList();
  }

  addTodo(todo: Todo): Observable<any> {
    return this.store.dispatch(new TodoAction.Add(todo));
  }

  loadTodoList() {
    const todos = this.webStorage.local.get('todo-list').parse(JSON).result() as Todo[];
    if (todos) {
      this.store.dispatch(new TodoAction.Load(todos));
    } else {
      this.todos$.subscribe((defaultTodos) => this.saveTodoList(defaultTodos));
    }
  }

  saveTodoList(todos: Todo[]) {
    this.webStorage.local.set('todo-list').value(todos).format(JSON).result();
    this.store.dispatch(new TodoAction.Load(todos));
  }
}

