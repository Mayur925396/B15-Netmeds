import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondomsComponent } from './condoms.component';

describe('CondomsComponent', () => {
  let component: CondomsComponent;
  let fixture: ComponentFixture<CondomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondomsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
