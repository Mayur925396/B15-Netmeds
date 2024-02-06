import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferandEarnsComponent } from './referand-earns.component';

describe('ReferandEarnsComponent', () => {
  let component: ReferandEarnsComponent;
  let fixture: ComponentFixture<ReferandEarnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferandEarnsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferandEarnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
