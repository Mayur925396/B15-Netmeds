import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactlensesComponent } from './contactlenses.component';

describe('ContactlensesComponent', () => {
  let component: ContactlensesComponent;
  let fixture: ComponentFixture<ContactlensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactlensesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactlensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
