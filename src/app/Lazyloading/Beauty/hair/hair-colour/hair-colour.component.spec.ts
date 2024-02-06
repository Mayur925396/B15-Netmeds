import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairColourComponent } from './hair-colour.component';

describe('HairColourComponent', () => {
  let component: HairColourComponent;
  let fixture: ComponentFixture<HairColourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HairColourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HairColourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
