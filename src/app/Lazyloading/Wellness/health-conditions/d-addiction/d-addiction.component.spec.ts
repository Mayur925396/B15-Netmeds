import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DAddictionComponent } from './d-addiction.component';

describe('DAddictionComponent', () => {
  let component: DAddictionComponent;
  let fixture: ComponentFixture<DAddictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DAddictionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DAddictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
