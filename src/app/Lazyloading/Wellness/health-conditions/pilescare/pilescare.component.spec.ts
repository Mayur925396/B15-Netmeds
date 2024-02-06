import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilescareComponent } from './pilescare.component';

describe('PilescareComponent', () => {
  let component: PilescareComponent;
  let fixture: ComponentFixture<PilescareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PilescareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PilescareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
