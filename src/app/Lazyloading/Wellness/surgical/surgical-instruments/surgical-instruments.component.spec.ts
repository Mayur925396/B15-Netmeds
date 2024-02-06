import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurgicalInstrumentsComponent } from './surgical-instruments.component';

describe('SurgicalInstrumentsComponent', () => {
  let component: SurgicalInstrumentsComponent;
  let fixture: ComponentFixture<SurgicalInstrumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurgicalInstrumentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurgicalInstrumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
