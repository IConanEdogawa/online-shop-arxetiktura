import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksPageBarComponent } from './tasks-page-bar.component';

describe('TasksPageBarComponent', () => {
  let component: TasksPageBarComponent;
  let fixture: ComponentFixture<TasksPageBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksPageBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TasksPageBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
