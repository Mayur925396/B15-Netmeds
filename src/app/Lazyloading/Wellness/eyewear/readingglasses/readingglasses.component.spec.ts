import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingglassesComponent } from './readingglasses.component';

describe('ReadingglassesComponent', () => {
  let component: ReadingglassesComponent;
  let fixture: ComponentFixture<ReadingglassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadingglassesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadingglassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
