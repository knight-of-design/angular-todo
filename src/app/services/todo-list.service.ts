import { Injectable } from '@angular/core';
import {WebStorageService} from './web-storage/web-storage.service';

export interface Todo {
  action: string;
  isDone?: boolean;
  effort?: number;
  cost?: number;
  importance?: number;
}

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor(private webStorage: WebStorageService) {
  }

  getTodoList(): Todo[] {
    return this.webStorage.local.get('todo-list').parse(JSON).result() as Todo[];
  }

  saveTodoList(todos: Todo[]) {
    this.webStorage.local.set('todo-list').value(todos).format(JSON).result();
  }
}

