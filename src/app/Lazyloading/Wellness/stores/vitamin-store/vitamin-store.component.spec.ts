import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitaminStoreComponent } from './vitamin-store.component';

describe('VitaminStoreComponent', () => {
  let component: VitaminStoreComponent;
  let fixture: ComponentFixture<VitaminStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VitaminStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VitaminStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
