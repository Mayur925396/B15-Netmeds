import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BathandShowerComponent } from './bathand-shower.component';

describe('BathandShowerComponent', () => {
  let component: BathandShowerComponent;
  let fixture: ComponentFixture<BathandShowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BathandShowerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BathandShowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
