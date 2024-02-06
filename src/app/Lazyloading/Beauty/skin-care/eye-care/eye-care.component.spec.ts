import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyeCareComponent } from './eye-care.component';

describe('EyeCareComponent', () => {
  let component: EyeCareComponent;
  let fixture: ComponentFixture<EyeCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EyeCareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EyeCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
