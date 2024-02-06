import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyagainComponent } from './buyagain.component';

describe('BuyagainComponent', () => {
  let component: BuyagainComponent;
  let fixture: ComponentFixture<BuyagainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyagainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyagainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
