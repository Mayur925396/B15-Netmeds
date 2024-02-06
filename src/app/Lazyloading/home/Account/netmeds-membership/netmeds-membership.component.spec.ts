import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetmedsMembershipComponent } from './netmeds-membership.component';

describe('NetmedsMembershipComponent', () => {
  let component: NetmedsMembershipComponent;
  let fixture: ComponentFixture<NetmedsMembershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetmedsMembershipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetmedsMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
