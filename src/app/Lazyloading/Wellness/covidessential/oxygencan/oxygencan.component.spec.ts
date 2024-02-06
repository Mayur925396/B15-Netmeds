import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OxygencanComponent } from './oxygencan.component';

describe('OxygencanComponent', () => {
  let component: OxygencanComponent;
  let fixture: ComponentFixture<OxygencanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OxygencanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OxygencanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
