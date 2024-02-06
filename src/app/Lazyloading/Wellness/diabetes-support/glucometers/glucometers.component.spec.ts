import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlucometersComponent } from './glucometers.component';

describe('GlucometersComponent', () => {
  let component: GlucometersComponent;
  let fixture: ComponentFixture<GlucometersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlucometersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlucometersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
