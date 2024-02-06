import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScalpTreatmentsComponent } from './scalp-treatments.component';

describe('ScalpTreatmentsComponent', () => {
  let component: ScalpTreatmentsComponent;
  let fixture: ComponentFixture<ScalpTreatmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScalpTreatmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScalpTreatmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
