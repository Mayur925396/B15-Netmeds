import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EyeglassesComponent } from './eyeglasses/eyeglasses.component';
import { ReadingglassesComponent } from './readingglasses/readingglasses.component';
import { ContactlensesComponent } from './contactlenses/contactlenses.component';



@NgModule({
  declarations: [
    EyeglassesComponent,
    ReadingglassesComponent,
    ContactlensesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EyewearModule { }
