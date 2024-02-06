import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToysandGamesComponent } from './toysand-games.component';

describe('ToysandGamesComponent', () => {
  let component: ToysandGamesComponent;
  let fixture: ComponentFixture<ToysandGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToysandGamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToysandGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
