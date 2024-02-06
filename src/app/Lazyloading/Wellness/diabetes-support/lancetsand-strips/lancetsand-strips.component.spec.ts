import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancetsandStripsComponent } from './lancetsand-strips.component';

describe('LancetsandStripsComponent', () => {
  let component: LancetsandStripsComponent;
  let fixture: ComponentFixture<LancetsandStripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LancetsandStripsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LancetsandStripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
