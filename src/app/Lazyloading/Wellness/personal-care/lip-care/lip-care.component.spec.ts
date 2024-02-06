import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LipCareComponent } from './lip-care.component';

describe('LipCareComponent', () => {
  let component: LipCareComponent;
  let fixture: ComponentFixture<LipCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LipCareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LipCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
