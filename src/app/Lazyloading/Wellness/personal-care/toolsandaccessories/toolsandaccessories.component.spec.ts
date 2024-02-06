import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsandaccessoriesComponent } from './toolsandaccessories.component';

describe('ToolsandaccessoriesComponent', () => {
  let component: ToolsandaccessoriesComponent;
  let fixture: ComponentFixture<ToolsandaccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolsandaccessoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolsandaccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
