import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllaboutCancerComponent } from './allabout-cancer.component';

describe('AllaboutCancerComponent', () => {
  let component: AllaboutCancerComponent;
  let fixture: ComponentFixture<AllaboutCancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllaboutCancerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllaboutCancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
