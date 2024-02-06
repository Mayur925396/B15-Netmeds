import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmunityComponent } from './immunity.component';

describe('ImmunityComponent', () => {
  let component: ImmunityComponent;
  let fixture: ComponentFixture<ImmunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImmunityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImmunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
