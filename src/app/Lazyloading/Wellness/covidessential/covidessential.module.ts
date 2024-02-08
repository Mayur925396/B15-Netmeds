import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OxygencanComponent } from './oxygencan/oxygencan.component';
import { PersoanlandhomeComponent } from './persoanlandhome/persoanlandhome.component';
import { BuisnessComponent } from './buisness/buisness.component';
import { MaskandglovesComponent } from './maskandgloves/maskandgloves.component';
import { TravelComponent } from './travel/travel.component';
import { RouterModule, Routes } from '@angular/router';

const route:Routes=[
  {path:'', component:OxygencanComponent},
  {path:'personalhome', component:PersoanlandhomeComponent},
  {path:'business', component:BuisnessComponent},
  {path:'mask', component:MaskandglovesComponent},
  {path:'travel', component:TravelComponent}
]

@NgModule({
  declarations: [
    OxygencanComponent,
    PersoanlandhomeComponent,
    BuisnessComponent,
    MaskandglovesComponent,
    TravelComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class CovidessentialModule { }
