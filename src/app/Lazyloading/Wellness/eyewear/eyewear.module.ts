import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EyeglassesComponent } from './eyeglasses/eyeglasses.component';
import { ReadingglassesComponent } from './readingglasses/readingglasses.component';
import { ContactlensesComponent } from './contactlenses/contactlenses.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes=[
  {path:'', component:EyeglassesComponent},
  {path:'reading', component:ReadingglassesComponent},
  {path:'contactlense', component:ContactlensesComponent}
]

@NgModule({
  declarations: [
    EyeglassesComponent,
    ReadingglassesComponent,
    ContactlensesComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class EyewearModule { }
