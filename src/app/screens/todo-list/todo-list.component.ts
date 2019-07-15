import { Component, OnInit } from '@angular/core';
import {Todo, TodoListService} from '../../services/todo-list.service';
import {FormControl, FormGroup} from '@angular/forms';
import {UserProfileService} from '../../services/user-profile.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.styl']
})
export class TodoListComponent implements OnInit {

  private todos: Todo[];
  private todoForm: FormGroup;
  private user: string;

  constructor(private todoListService: TodoListService,
              private userService: UserProfileService) {
    this.todos = this.todoListService.getTodoList() || [{action: 'Go for a walk'}];
    this.user = this.userService.getUserName();
  }

  ngOnInit() {
    this.todoForm = new FormGroup({
      action: new FormControl(),
    });
  }

  addTodo(e) {
    e.preventDefault();
    this.todos.push(this.todoForm.value);
    this.todoListService.saveTodoList(this.todos);
    this.todoForm.reset();
    return false;
  }

}
