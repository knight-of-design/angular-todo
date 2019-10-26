import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

}
