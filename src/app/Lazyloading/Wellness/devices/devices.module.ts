import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreathComponent } from './breath/breath.component';
import { SurgicalComponent } from './surgical/surgical.component';
import { MeasurementComponent } from './measurement/measurement.component';
import { OrthoComponent } from './ortho/ortho.component';
import { RouterModule, Routes } from '@angular/router';

const route:Routes=[
  {path:'', component:BreathComponent},
  {path:'measurement', component:MeasurementComponent},
  {path:'ortho', component:OrthoComponent},
  {path:'surgical', component:SurgicalComponent}
]


@NgModule({
  declarations: [
    BreathComponent,
    SurgicalComponent,
    MeasurementComponent,
    OrthoComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class DevicesModule { }
