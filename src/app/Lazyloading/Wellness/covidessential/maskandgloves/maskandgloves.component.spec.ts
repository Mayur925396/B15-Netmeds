import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskandglovesComponent } from './maskandgloves.component';

describe('MaskandglovesComponent', () => {
  let component: MaskandglovesComponent;
  let fixture: ComponentFixture<MaskandglovesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaskandglovesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaskandglovesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
