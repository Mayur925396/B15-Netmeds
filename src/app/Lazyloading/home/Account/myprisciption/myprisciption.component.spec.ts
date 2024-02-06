import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyprisciptionComponent } from './myprisciption.component';

describe('MyprisciptionComponent', () => {
  let component: MyprisciptionComponent;
  let fixture: ComponentFixture<MyprisciptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyprisciptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyprisciptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
