import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BathingAceessoriesComponent } from './bathing-aceessories.component';

describe('BathingAceessoriesComponent', () => {
  let component: BathingAceessoriesComponent;
  let fixture: ComponentFixture<BathingAceessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BathingAceessoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BathingAceessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
