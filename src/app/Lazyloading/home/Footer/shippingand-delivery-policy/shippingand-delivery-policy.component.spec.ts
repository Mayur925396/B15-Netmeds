import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingandDeliveryPolicyComponent } from './shippingand-delivery-policy.component';

describe('ShippingandDeliveryPolicyComponent', () => {
  let component: ShippingandDeliveryPolicyComponent;
  let fixture: ComponentFixture<ShippingandDeliveryPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShippingandDeliveryPolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShippingandDeliveryPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
