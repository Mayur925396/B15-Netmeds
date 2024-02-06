import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleansersComponent } from './cleansers.component';

describe('CleansersComponent', () => {
  let component: CleansersComponent;
  let fixture: ComponentFixture<CleansersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CleansersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CleansersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
