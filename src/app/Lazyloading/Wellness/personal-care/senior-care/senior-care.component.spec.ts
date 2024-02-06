import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeniorCareComponent } from './senior-care.component';

describe('SeniorCareComponent', () => {
  let component: SeniorCareComponent;
  let fixture: ComponentFixture<SeniorCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeniorCareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeniorCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
