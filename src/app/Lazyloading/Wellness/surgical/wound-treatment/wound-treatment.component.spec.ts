import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoundTreatmentComponent } from './wound-treatment.component';

describe('WoundTreatmentComponent', () => {
  let component: WoundTreatmentComponent;
  let fixture: ComponentFixture<WoundTreatmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoundTreatmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WoundTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
