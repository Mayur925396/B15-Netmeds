import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSpeakComponent } from './customer-speak.component';

describe('CustomerSpeakComponent', () => {
  let component: CustomerSpeakComponent;
  let fixture: ComponentFixture<CustomerSpeakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSpeakComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerSpeakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
