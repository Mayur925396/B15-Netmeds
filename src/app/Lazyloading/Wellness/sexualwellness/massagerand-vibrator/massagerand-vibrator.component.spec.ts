import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassagerandVibratorComponent } from './massagerand-vibrator.component';

describe('MassagerandVibratorComponent', () => {
  let component: MassagerandVibratorComponent;
  let fixture: ComponentFixture<MassagerandVibratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MassagerandVibratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MassagerandVibratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
