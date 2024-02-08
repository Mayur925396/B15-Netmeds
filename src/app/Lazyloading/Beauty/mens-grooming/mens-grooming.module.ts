import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeardCareComponent } from './beard-care/beard-care.component';
import { ShavingComponent } from './shaving/shaving.component';
import { RouterModule, Routes } from '@angular/router';

const route:Routes=[
  {path:'', component:BeardCareComponent},
  {path:'shaving', component:ShavingComponent}
]

@NgModule({
  declarations: [
    BeardCareComponent,
    ShavingComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class MensGroomingModule { }
