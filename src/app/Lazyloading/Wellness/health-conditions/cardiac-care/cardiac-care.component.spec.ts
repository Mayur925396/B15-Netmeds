import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardiacCareComponent } from './cardiac-care.component';

describe('CardiacCareComponent', () => {
  let component: CardiacCareComponent;
  let fixture: ComponentFixture<CardiacCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardiacCareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardiacCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
