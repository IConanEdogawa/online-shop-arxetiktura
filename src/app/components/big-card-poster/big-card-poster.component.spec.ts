import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigCardPosterComponent } from './big-card-poster.component';

describe('BigCardPosterComponent', () => {
  let component: BigCardPosterComponent;
  let fixture: ComponentFixture<BigCardPosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigCardPosterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BigCardPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
