import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenComponent } from './men/men.component';
import { FemaleComponent } from './female/female.component';
import { UnisexComponent } from './unisex/unisex.component';
import { RouterModule, Routes } from '@angular/router';


const route:Routes=[
  {path:'', component:MenComponent},
  {path:'female', component:FemaleComponent},
  {path:'unisex',component:UnisexComponent}
]

@NgModule({
  declarations: [
    MenComponent,
    FemaleComponent,
    UnisexComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class FragrencesModule { }
