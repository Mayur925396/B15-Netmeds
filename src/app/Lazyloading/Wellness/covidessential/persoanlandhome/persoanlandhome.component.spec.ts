import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoanlandhomeComponent } from './persoanlandhome.component';

describe('PersoanlandhomeComponent', () => {
  let component: PersoanlandhomeComponent;
  let fixture: ComponentFixture<PersoanlandhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersoanlandhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersoanlandhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
