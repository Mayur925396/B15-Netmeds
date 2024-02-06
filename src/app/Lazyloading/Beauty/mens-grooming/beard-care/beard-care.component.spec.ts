import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeardCareComponent } from './beard-care.component';

describe('BeardCareComponent', () => {
  let component: BeardCareComponent;
  let fixture: ComponentFixture<BeardCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeardCareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeardCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
