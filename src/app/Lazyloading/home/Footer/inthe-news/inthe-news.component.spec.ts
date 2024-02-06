import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntheNewsComponent } from './inthe-news.component';

describe('IntheNewsComponent', () => {
  let component: IntheNewsComponent;
  let fixture: ComponentFixture<IntheNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntheNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntheNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
