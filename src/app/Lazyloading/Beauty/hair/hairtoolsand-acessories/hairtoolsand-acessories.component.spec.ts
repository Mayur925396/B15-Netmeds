import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairtoolsandAcessoriesComponent } from './hairtoolsand-acessories.component';

describe('HairtoolsandAcessoriesComponent', () => {
  let component: HairtoolsandAcessoriesComponent;
  let fixture: ComponentFixture<HairtoolsandAcessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HairtoolsandAcessoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HairtoolsandAcessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
