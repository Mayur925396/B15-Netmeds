import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaAwarenessComponent } from './corona-awareness.component';

describe('CoronaAwarenessComponent', () => {
  let component: CoronaAwarenessComponent;
  let fixture: ComponentFixture<CoronaAwarenessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoronaAwarenessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoronaAwarenessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
