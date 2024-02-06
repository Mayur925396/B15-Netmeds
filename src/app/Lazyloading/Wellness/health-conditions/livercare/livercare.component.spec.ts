import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivercareComponent } from './livercare.component';

describe('LivercareComponent', () => {
  let component: LivercareComponent;
  let fixture: ComponentFixture<LivercareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivercareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivercareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
