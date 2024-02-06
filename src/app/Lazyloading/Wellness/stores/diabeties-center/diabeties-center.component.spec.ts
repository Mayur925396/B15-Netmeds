import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiabetiesCenterComponent } from './diabeties-center.component';

describe('DiabetiesCenterComponent', () => {
  let component: DiabetiesCenterComponent;
  let fixture: ComponentFixture<DiabetiesCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiabetiesCenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiabetiesCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
