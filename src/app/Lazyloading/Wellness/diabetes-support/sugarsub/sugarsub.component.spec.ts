import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugarsubComponent } from './sugarsub.component';

describe('SugarsubComponent', () => {
  let component: SugarsubComponent;
  let fixture: ComponentFixture<SugarsubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SugarsubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SugarsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
