import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo.model';
import { TodoListService } from '../../services/todo-list.service';

@Component({
  selector: 'app-todo-kanban',
  templateUrl: './todo-kanban.component.html',
  styleUrls: ['./todo-kanban.component.styl']
})
export class TodoKanbanComponent implements OnInit {

  private todosToBegin$: Observable<Todo[]> = this.todoListService.todosToBegin$;
  private todosInProgress$: Observable<Todo[]> = this.todoListService.todosInProgress$;
  private todosFinished$: Observable<Todo[]> = this.todoListService.todosBeenFinished$;
  private todoForm: FormGroup;
  private todosForm: FormGroup;
  private todosToBeginForms: FormGroup[] = [];
  private todosInProgressForms: FormGroup[] = [];
  private todosFinishedForms: FormGroup[] = [];

  constructor(private todoListService: TodoListService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.todoForm = new FormGroup({
      action: new FormControl(),
    });

    this.todosToBegin$.subscribe((todos: Todo[]) => {
      this.todosToBeginForms = todos.map(todo => this.fb.group({
        action: new FormControl(todo.action)
      }));
      this.todosForm = this.fb.group({
        todos: this.fb.array(this.todosToBeginForms)
      });
    });

    this.todosForm = this.fb.group({
      todosToBegin: this.fb.array(this.todosToBeginForms)
    });

    this.todosToBegin$.subscribe((todos: Todo[]) => {
      this.todosToBeginForms = todos.map(todo => this.fb.group({
        action: new FormControl(todo.action)
      }));
    });

    this.todosInProgress$.subscribe((todos: Todo[]) => {
      this.todosInProgressForms = todos.map(todo => this.fb.group({
        action: new FormControl(todo.action)
      }));
    });

    this.todosFinished$.subscribe((todos: Todo[]) => {
      this.todosFinishedForms = todos.map(todo => this.fb.group({
        action: new FormControl(todo.action)
      }));
    });
  }

  addTodo(event: Event) {
    event.preventDefault();
  }

}
