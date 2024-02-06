import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeandHealthComponent } from './homeand-health.component';

describe('HomeandHealthComponent', () => {
  let component: HomeandHealthComponent;
  let fixture: ComponentFixture<HomeandHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeandHealthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeandHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
