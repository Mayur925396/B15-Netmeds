import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesandPayementPolicyComponent } from './feesand-payement-policy.component';

describe('FeesandPayementPolicyComponent', () => {
  let component: FeesandPayementPolicyComponent;
  let fixture: ComponentFixture<FeesandPayementPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeesandPayementPolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeesandPayementPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
