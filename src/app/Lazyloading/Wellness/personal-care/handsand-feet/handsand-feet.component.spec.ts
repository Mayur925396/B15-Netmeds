import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandsandFeetComponent } from './handsand-feet.component';

describe('HandsandFeetComponent', () => {
  let component: HandsandFeetComponent;
  let fixture: ComponentFixture<HandsandFeetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandsandFeetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandsandFeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
