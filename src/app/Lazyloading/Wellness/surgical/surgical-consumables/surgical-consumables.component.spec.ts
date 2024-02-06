import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurgicalConsumablesComponent } from './surgical-consumables.component';

describe('SurgicalConsumablesComponent', () => {
  let component: SurgicalConsumablesComponent;
  let fixture: ComponentFixture<SurgicalConsumablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurgicalConsumablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurgicalConsumablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
