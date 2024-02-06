import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightManagementComponent } from './weight-management.component';

describe('WeightManagementComponent', () => {
  let component: WeightManagementComponent;
  let fixture: ComponentFixture<WeightManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeightManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeightManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
