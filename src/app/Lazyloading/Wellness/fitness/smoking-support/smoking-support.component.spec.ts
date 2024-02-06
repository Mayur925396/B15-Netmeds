import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmokingSupportComponent } from './smoking-support.component';

describe('SmokingSupportComponent', () => {
  let component: SmokingSupportComponent;
  let fixture: ComponentFixture<SmokingSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmokingSupportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmokingSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
