import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksPageWatchedBarCardComponent } from './tasks-page-watched-bar-card.component';

describe('TasksPageWatchedBarCardComponent', () => {
  let component: TasksPageWatchedBarCardComponent;
  let fixture: ComponentFixture<TasksPageWatchedBarCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksPageWatchedBarCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TasksPageWatchedBarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
