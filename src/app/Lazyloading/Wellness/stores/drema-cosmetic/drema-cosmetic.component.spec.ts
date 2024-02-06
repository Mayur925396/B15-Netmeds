import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DremaCosmeticComponent } from './drema-cosmetic.component';

describe('DremaCosmeticComponent', () => {
  let component: DremaCosmeticComponent;
  let fixture: ComponentFixture<DremaCosmeticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DremaCosmeticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DremaCosmeticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
