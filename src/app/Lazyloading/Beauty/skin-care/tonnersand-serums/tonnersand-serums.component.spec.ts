import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TonnersandSerumsComponent } from './tonnersand-serums.component';

describe('TonnersandSerumsComponent', () => {
  let component: TonnersandSerumsComponent;
  let fixture: ComponentFixture<TonnersandSerumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TonnersandSerumsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TonnersandSerumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
