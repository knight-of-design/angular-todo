import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/todo.model';
import {TodoListService} from '../../services/todo-list.service';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {UserProfileService} from '../../services/user-profile.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.styl']
})
export class TodoListComponent implements OnInit {

  private todos: Todo[];
  private todoForm: FormGroup;
  private todoListForm: FormGroup;
  private user: string;

  constructor(private todoListService: TodoListService,
              private userService: UserProfileService,
              private fb: FormBuilder) {
    this.todos = this.todoListService.getTodoList() || [{action: 'Go for a walk'}];
    this.user = this.userService.getUserName();
  }

  ngOnInit() {
    this.todoForm = new FormGroup({
      action: new FormControl(),
    });

    this.todoListForm = this.fb.group({
      todos: this.fb.array(this.todos.map(todo => this.fb.group({
        action: new FormControl(todo.action),
        isDone: new FormControl(todo.progress && todo.progress > 0 )})))
    });
  }

  addTodo(e) {
    e.preventDefault();
    const action = this.todoForm.value.action;
    this.todos.push({action});
    const control = this.todoListForm.controls.todos as FormArray;
    control.push(new FormGroup({
      action: new FormControl(action),
      isDone: new FormControl(false)
    }));
    this.save();
    this.todoForm.reset();
    return false;
  }

  save() {
    console.log(this.todoListForm.value.todos);
    this.todoListService.saveTodoList(this.todoListForm.value.todos);
  }

}
