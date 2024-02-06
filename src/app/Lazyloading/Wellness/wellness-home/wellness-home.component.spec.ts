import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellnessHomeComponent } from './wellness-home.component';

describe('WellnessHomeComponent', () => {
  let component: WellnessHomeComponent;
  let fixture: ComponentFixture<WellnessHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WellnessHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WellnessHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
