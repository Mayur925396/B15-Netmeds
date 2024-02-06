import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairStylingToolsComponent } from './hair-styling-tools.component';

describe('HairStylingToolsComponent', () => {
  let component: HairStylingToolsComponent;
  let fixture: ComponentFixture<HairStylingToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HairStylingToolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HairStylingToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
