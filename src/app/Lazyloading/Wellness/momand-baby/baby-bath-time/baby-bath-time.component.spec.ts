import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyBathTimeComponent } from './baby-bath-time.component';

describe('BabyBathTimeComponent', () => {
  let component: BabyBathTimeComponent;
  let fixture: ComponentFixture<BabyBathTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabyBathTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BabyBathTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
