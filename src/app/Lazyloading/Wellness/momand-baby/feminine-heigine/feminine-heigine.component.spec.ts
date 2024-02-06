import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeminineHeigineComponent } from './feminine-heigine.component';

describe('FeminineHeigineComponent', () => {
  let component: FeminineHeigineComponent;
  let fixture: ComponentFixture<FeminineHeigineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeminineHeigineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeminineHeigineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
