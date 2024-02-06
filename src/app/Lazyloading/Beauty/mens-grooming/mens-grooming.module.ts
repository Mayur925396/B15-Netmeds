import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeardCareComponent } from './beard-care/beard-care.component';
import { ShavingComponent } from './shaving/shaving.component';



@NgModule({
  declarations: [
    BeardCareComponent,
    ShavingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MensGroomingModule { }
