import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthFoodComponent } from './health-food.component';

describe('HealthFoodComponent', () => {
  let component: HealthFoodComponent;
  let fixture: ComponentFixture<HealthFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
