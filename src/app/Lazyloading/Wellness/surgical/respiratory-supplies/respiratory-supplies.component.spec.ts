import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespiratorySuppliesComponent } from './respiratory-supplies.component';

describe('RespiratorySuppliesComponent', () => {
  let component: RespiratorySuppliesComponent;
  let fixture: ComponentFixture<RespiratorySuppliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespiratorySuppliesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespiratorySuppliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
