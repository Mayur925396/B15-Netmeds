import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeuptoolsComponent } from './makeuptools.component';

describe('MakeuptoolsComponent', () => {
  let component: MakeuptoolsComponent;
  let fixture: ComponentFixture<MakeuptoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeuptoolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeuptoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
