import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoKanbanComponent } from './todo-kanban.component';

describe('TodoKanbanComponent', () => {
  let component: TodoKanbanComponent;
  let fixture: ComponentFixture<TodoKanbanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoKanbanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoKanbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
