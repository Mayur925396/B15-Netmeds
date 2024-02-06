import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShavingComponent } from './shaving.component';

describe('ShavingComponent', () => {
  let component: ShavingComponent;
  let fixture: ComponentFixture<ShavingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShavingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShavingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
