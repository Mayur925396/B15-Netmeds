import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiabetiesCareComponent } from './diabeties-care.component';

describe('DiabetiesCareComponent', () => {
  let component: DiabetiesCareComponent;
  let fixture: ComponentFixture<DiabetiesCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiabetiesCareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiabetiesCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
