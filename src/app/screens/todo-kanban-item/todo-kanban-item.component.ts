import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import truly from '@truly.js/awesomeness';


@Component({
  selector: 'app-todo-kanban-item',
  templateUrl: './todo-kanban-item.component.html',
  styleUrls: ['./todo-kanban-item.component.styl']
})
export class TodoKanbanItemComponent implements OnInit {

  @Input()
  public todo: Todo;
  @Input()
  public form: FormGroup;

  private showProgress = truly
    .defined(this.todo)
    .and(this.todo.progress > 0)
    .and(this.todo.progress < 100)
    .then(true);

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

}
