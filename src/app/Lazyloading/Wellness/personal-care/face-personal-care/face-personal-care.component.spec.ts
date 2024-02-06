import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacePersonalCareComponent } from './face-personal-care.component';

describe('FacePersonalCareComponent', () => {
  let component: FacePersonalCareComponent;
  let fixture: ComponentFixture<FacePersonalCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacePersonalCareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacePersonalCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
