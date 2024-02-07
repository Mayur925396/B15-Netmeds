import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlucometersComponent } from './glucometers/glucometers.component';
import { SugarsubComponent } from './sugarsub/sugarsub.component';
import { DiabetiesManagementComponent } from './diabeties-management/diabeties-management.component';
import { DiabetiesCareComponent } from './diabeties-care/diabeties-care.component';
import { LancetsandStripsComponent } from './lancetsand-strips/lancetsand-strips.component';
import { RouterModule, Routes } from '@angular/router';

const route:Routes=[
  {path:'',component:GlucometersComponent},
  {path:'sugarsub',component:SugarsubComponent},
  {path:'diabeticsmgmt', component:DiabetiesManagementComponent},
  {path:'diabetiescare', component:DiabetiesCareComponent},
  {path:'lancets', component:LancetsandStripsComponent}
]

@NgModule({
  declarations: [
    GlucometersComponent,
    SugarsubComponent,
    DiabetiesManagementComponent,
    DiabetiesCareComponent,
    LancetsandStripsComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class DiabetesSupportModule { }
