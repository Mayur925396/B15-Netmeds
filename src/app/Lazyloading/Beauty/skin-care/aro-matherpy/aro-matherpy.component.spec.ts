import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AroMatherpyComponent } from './aro-matherpy.component';

describe('AroMatherpyComponent', () => {
  let component: AroMatherpyComponent;
  let fixture: ComponentFixture<AroMatherpyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AroMatherpyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AroMatherpyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
