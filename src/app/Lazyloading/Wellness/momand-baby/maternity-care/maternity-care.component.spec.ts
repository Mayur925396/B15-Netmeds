import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaternityCareComponent } from './maternity-care.component';

describe('MaternityCareComponent', () => {
  let component: MaternityCareComponent;
  let fixture: ComponentFixture<MaternityCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaternityCareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaternityCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
