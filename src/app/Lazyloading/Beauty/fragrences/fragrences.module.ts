import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenComponent } from './men/men.component';
import { FemaleComponent } from './female/female.component';
import { UnisexComponent } from './unisex/unisex.component';



@NgModule({
  declarations: [
    MenComponent,
    FemaleComponent,
    UnisexComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FragrencesModule { }
