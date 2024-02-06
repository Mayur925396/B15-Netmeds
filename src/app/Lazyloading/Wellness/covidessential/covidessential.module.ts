import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OxygencanComponent } from './oxygencan/oxygencan.component';
import { PersoanlandhomeComponent } from './persoanlandhome/persoanlandhome.component';
import { BuisnessComponent } from './buisness/buisness.component';
import { MaskandglovesComponent } from './maskandgloves/maskandgloves.component';
import { TravelComponent } from './travel/travel.component';



@NgModule({
  declarations: [
    OxygencanComponent,
    PersoanlandhomeComponent,
    BuisnessComponent,
    MaskandglovesComponent,
    TravelComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CovidessentialModule { }
