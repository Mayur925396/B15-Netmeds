import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceSkinToolsComponent } from './face-skin-tools.component';

describe('FaceSkinToolsComponent', () => {
  let component: FaceSkinToolsComponent;
  let fixture: ComponentFixture<FaceSkinToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaceSkinToolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaceSkinToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
