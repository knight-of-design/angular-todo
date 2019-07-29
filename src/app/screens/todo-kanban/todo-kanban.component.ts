import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo-kanban',
  templateUrl: './todo-kanban.component.html',
  styleUrls: ['./todo-kanban.component.styl']
})
export class TodoKanbanComponent implements OnInit {
  private todoForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.todoForm = new FormGroup({
      action: new FormControl(),
    });
  }

  addTodo(event: Event) {
    event.preventDefault();
  }

}
