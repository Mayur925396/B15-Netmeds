import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StomachCareComponent } from './stomach-care.component';

describe('StomachCareComponent', () => {
  let component: StomachCareComponent;
  let fixture: ComponentFixture<StomachCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StomachCareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StomachCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
