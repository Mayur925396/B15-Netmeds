import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiCareComponent } from './gi-care.component';

describe('GiCareComponent', () => {
  let component: GiCareComponent;
  let fixture: ComponentFixture<GiCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiCareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
