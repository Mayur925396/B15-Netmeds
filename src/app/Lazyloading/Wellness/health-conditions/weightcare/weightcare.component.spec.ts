import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightcareComponent } from './weightcare.component';

describe('WeightcareComponent', () => {
  let component: WeightcareComponent;
  let fixture: ComponentFixture<WeightcareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeightcareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeightcareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
