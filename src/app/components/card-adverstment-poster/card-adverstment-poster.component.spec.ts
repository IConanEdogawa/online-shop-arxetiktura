import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAdverstmentPosterComponent } from './card-adverstment-poster.component';

describe('CardAdverstmentPosterComponent', () => {
  let component: CardAdverstmentPosterComponent;
  let fixture: ComponentFixture<CardAdverstmentPosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAdverstmentPosterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardAdverstmentPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
