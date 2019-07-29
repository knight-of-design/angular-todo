import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/todo.model';
import {TodoListService} from '../../services/todo-list.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {UserProfileService} from '../../services/user-profile.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.styl']
})
export class TodoListComponent implements OnInit {

  private todos: Todo[];
  private todos$: Observable<Todo[]> = this.todoListService.todos$;
  private todoForm: FormGroup;
  private todoListForm: FormGroup;
  private user: string;

  constructor(private todoListService: TodoListService,
              private userService: UserProfileService,
              private fb: FormBuilder) {
    this.user = this.userService.getUserName();
  }

  ngOnInit() {
    this.todoForm = new FormGroup({
      action: new FormControl(),
    });

    this.todos$.subscribe((todos: Todo[]) => {
      this.todoListForm = this.fb.group({
        todos: this.fb.array(todos.map(todo => this.fb.group({
          action: new FormControl(todo.action),
          isDone: new FormControl(todo.progress && todo.progress > 0 )})))
      });
    });
  }

  addTodo(e) {
    e.preventDefault();
    this.todoListService.addTodo({action: this.todoForm.value.action});
    this.save();
    this.todoForm.reset();
  }

  save() {
    const todos: Todo[] = this.todoListForm.value.todos.map(
      (todo) => ({action: todo.action, progress: todo.isDone ? 100 : 0})
    );
    this.todoListService.saveTodoList(todos);
  }

}
