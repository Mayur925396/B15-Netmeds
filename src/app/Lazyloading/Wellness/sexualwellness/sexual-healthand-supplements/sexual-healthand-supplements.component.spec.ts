import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SexualHealthandSupplementsComponent } from './sexual-healthand-supplements.component';

describe('SexualHealthandSupplementsComponent', () => {
  let component: SexualHealthandSupplementsComponent;
  let fixture: ComponentFixture<SexualHealthandSupplementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SexualHealthandSupplementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SexualHealthandSupplementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
