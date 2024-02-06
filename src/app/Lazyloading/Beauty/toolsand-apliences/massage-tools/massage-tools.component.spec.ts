import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassageToolsComponent } from './massage-tools.component';

describe('MassageToolsComponent', () => {
  let component: MassageToolsComponent;
  let fixture: ComponentFixture<MassageToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MassageToolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MassageToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
