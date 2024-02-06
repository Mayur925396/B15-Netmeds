import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentalCareComponent } from './mental-care.component';

describe('MentalCareComponent', () => {
  let component: MentalCareComponent;
  let fixture: ComponentFixture<MentalCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentalCareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentalCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
