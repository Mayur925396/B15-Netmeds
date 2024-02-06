import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IVinfusionComponent } from './ivinfusion.component';

describe('IVinfusionComponent', () => {
  let component: IVinfusionComponent;
  let fixture: ComponentFixture<IVinfusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IVinfusionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IVinfusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
