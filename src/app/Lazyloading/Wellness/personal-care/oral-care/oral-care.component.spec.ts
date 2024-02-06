import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OralCareComponent } from './oral-care.component';

describe('OralCareComponent', () => {
  let component: OralCareComponent;
  let fixture: ComponentFixture<OralCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OralCareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OralCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
