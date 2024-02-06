import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceSkinCareComponent } from './face-skin-care.component';

describe('FaceSkinCareComponent', () => {
  let component: FaceSkinCareComponent;
  let fixture: ComponentFixture<FaceSkinCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaceSkinCareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaceSkinCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
