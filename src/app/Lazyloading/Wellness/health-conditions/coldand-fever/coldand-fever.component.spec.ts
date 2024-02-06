import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdandFeverComponent } from './coldand-fever.component';

describe('ColdandFeverComponent', () => {
  let component: ColdandFeverComponent;
  let fixture: ComponentFixture<ColdandFeverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColdandFeverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColdandFeverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
