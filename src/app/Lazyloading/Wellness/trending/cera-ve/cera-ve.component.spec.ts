import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeraVeComponent } from './cera-ve.component';

describe('CeraVeComponent', () => {
  let component: CeraVeComponent;
  let fixture: ComponentFixture<CeraVeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeraVeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeraVeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
