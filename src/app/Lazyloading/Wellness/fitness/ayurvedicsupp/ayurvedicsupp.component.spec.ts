import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyurvedicsuppComponent } from './ayurvedicsupp.component';

describe('AyurvedicsuppComponent', () => {
  let component: AyurvedicsuppComponent;
  let fixture: ComponentFixture<AyurvedicsuppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AyurvedicsuppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AyurvedicsuppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
