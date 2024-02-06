import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreathComponent } from './breath/breath.component';
import { SurgicalComponent } from './surgical/surgical.component';
import { MeasurementComponent } from './measurement/measurement.component';
import { OrthoComponent } from './ortho/ortho.component';



@NgModule({
  declarations: [
    BreathComponent,
    SurgicalComponent,
    MeasurementComponent,
    OrthoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DevicesModule { }
