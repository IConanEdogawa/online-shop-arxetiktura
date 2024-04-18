import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksPageSidebarComponent } from './tasks-page-sidebar.component';

describe('TasksPageSidebarComponent', () => {
  let component: TasksPageSidebarComponent;
  let fixture: ComponentFixture<TasksPageSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksPageSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TasksPageSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
