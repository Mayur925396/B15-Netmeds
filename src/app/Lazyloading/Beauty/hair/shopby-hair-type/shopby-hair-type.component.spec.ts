import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopbyHairTypeComponent } from './shopby-hair-type.component';

describe('ShopbyHairTypeComponent', () => {
  let component: ShopbyHairTypeComponent;
  let fixture: ComponentFixture<ShopbyHairTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopbyHairTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopbyHairTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
