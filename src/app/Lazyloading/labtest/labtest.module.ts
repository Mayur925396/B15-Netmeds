import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabtestComponent } from './labtest/labtest.component';
import { RouterModule, Routes } from '@angular/router';

const route:Routes=[
  {path:'', component:LabtestComponent}
]

@NgModule({
  declarations: [
    LabtestComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class LabtestModule { }
