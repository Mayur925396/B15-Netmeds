import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaternityAccessoriesComponent } from './maternity-accessories.component';

describe('MaternityAccessoriesComponent', () => {
  let component: MaternityAccessoriesComponent;
  let fixture: ComponentFixture<MaternityAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaternityAccessoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaternityAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
