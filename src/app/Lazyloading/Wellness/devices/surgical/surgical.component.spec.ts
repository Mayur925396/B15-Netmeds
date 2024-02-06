import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurgicalComponent } from './surgical.component';

describe('SurgicalComponent', () => {
  let component: SurgicalComponent;
  let fixture: ComponentFixture<SurgicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurgicalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurgicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
