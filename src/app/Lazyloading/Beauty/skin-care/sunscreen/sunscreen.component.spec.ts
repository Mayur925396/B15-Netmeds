import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunscreenComponent } from './sunscreen.component';

describe('SunscreenComponent', () => {
  let component: SunscreenComponent;
  let fixture: ComponentFixture<SunscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SunscreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SunscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
