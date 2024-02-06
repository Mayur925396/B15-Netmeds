import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CetaphillComponent } from './cetaphill.component';

describe('CetaphillComponent', () => {
  let component: CetaphillComponent;
  let fixture: ComponentFixture<CetaphillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CetaphillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CetaphillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
