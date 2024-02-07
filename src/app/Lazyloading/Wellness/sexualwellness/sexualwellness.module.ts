import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CondomsComponent } from './condoms/condoms.component';
import { MassagerandVibratorComponent } from './massagerand-vibrator/massagerand-vibrator.component';
import { SexualHealthandSupplementsComponent } from './sexual-healthand-supplements/sexual-healthand-supplements.component';
import { LubricantsComponent } from './lubricants/lubricants.component';
import { SprayandGelsComponent } from './sprayand-gels/sprayand-gels.component';
import { RouterModule, Routes } from '@angular/router';

const route:Routes=[
  {path:'', component:CondomsComponent},
  {path:'massagervib', component:MassagerandVibratorComponent},
  {path:'sexualhealth', component:SexualHealthandSupplementsComponent},
  {path:'lubricants', component:LubricantsComponent},
  {path:'sprayngel', component:SprayandGelsComponent}
]

@NgModule({
  declarations: [
    CondomsComponent,
    MassagerandVibratorComponent,
    SexualHealthandSupplementsComponent,
    LubricantsComponent,
    SprayandGelsComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class SexualwellnessModule { }
