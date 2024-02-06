import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiabetiesManagementComponent } from './diabeties-management.component';

describe('DiabetiesManagementComponent', () => {
  let component: DiabetiesManagementComponent;
  let fixture: ComponentFixture<DiabetiesManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiabetiesManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiabetiesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
