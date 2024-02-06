import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CondomsComponent } from './condoms/condoms.component';
import { MassagerandVibratorComponent } from './massagerand-vibrator/massagerand-vibrator.component';
import { SexualHealthandSupplementsComponent } from './sexual-healthand-supplements/sexual-healthand-supplements.component';
import { LubricantsComponent } from './lubricants/lubricants.component';
import { SprayandGelsComponent } from './sprayand-gels/sprayand-gels.component';



@NgModule({
  declarations: [
    CondomsComponent,
    MassagerandVibratorComponent,
    SexualHealthandSupplementsComponent,
    LubricantsComponent,
    SprayandGelsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SexualwellnessModule { }
