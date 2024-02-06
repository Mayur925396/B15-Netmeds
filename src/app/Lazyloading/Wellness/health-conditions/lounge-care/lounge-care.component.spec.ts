import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoungeCareComponent } from './lounge-care.component';

describe('LoungeCareComponent', () => {
  let component: LoungeCareComponent;
  let fixture: ComponentFixture<LoungeCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoungeCareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoungeCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
