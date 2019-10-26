import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoKanbanItemComponent } from './todo-kanban-item.component';

describe('TodoKanbanItemComponent', () => {
  let component: TodoKanbanItemComponent;
  let fixture: ComponentFixture<TodoKanbanItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoKanbanItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoKanbanItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
