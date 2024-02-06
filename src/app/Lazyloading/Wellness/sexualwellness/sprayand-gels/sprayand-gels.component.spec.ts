import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprayandGelsComponent } from './sprayand-gels.component';

describe('SprayandGelsComponent', () => {
  let component: SprayandGelsComponent;
  let fixture: ComponentFixture<SprayandGelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SprayandGelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SprayandGelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
