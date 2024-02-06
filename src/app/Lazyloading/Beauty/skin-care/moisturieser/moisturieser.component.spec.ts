import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoisturieserComponent } from './moisturieser.component';

describe('MoisturieserComponent', () => {
  let component: MoisturieserComponent;
  let fixture: ComponentFixture<MoisturieserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoisturieserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoisturieserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
