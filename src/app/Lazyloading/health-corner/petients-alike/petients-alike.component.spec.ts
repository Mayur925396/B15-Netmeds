import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetientsAlikeComponent } from './petients-alike.component';

describe('PetientsAlikeComponent', () => {
  let component: PetientsAlikeComponent;
  let fixture: ComponentFixture<PetientsAlikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetientsAlikeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetientsAlikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
