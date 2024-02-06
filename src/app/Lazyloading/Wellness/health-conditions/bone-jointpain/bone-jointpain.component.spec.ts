import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoneJointpainComponent } from './bone-jointpain.component';

describe('BoneJointpainComponent', () => {
  let component: BoneJointpainComponent;
  let fixture: ComponentFixture<BoneJointpainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoneJointpainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoneJointpainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
