import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutNetmedsComponent } from './about-netmeds.component';

describe('AboutNetmedsComponent', () => {
  let component: AboutNetmedsComponent;
  let fixture: ComponentFixture<AboutNetmedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutNetmedsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutNetmedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
