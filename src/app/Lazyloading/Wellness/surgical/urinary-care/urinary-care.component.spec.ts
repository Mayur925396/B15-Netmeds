import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrinaryCareComponent } from './urinary-care.component';

describe('UrinaryCareComponent', () => {
  let component: UrinaryCareComponent;
  let fixture: ComponentFixture<UrinaryCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrinaryCareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrinaryCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
