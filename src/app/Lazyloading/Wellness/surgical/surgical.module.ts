import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RespiratorySuppliesComponent } from './respiratory-supplies/respiratory-supplies.component';
import { SurgicalConsumablesComponent } from './surgical-consumables/surgical-consumables.component';
import { IVinfusionComponent } from './ivinfusion/ivinfusion.component';
import { SurgicalInstrumentsComponent } from './surgical-instruments/surgical-instruments.component';
import { DressingComponent } from './dressing/dressing.component';
import { GiCareComponent } from './gi-care/gi-care.component';
import { UrinaryCareComponent } from './urinary-care/urinary-care.component';
import { WoundTreatmentComponent } from './wound-treatment/wound-treatment.component';
import { RouterModule, Routes } from '@angular/router';


const route:Routes=[
  {path:'', component:RespiratorySuppliesComponent},
  {path:'surgical', component:SurgicalConsumablesComponent},
  {path:'ivinfusion', component:IVinfusionComponent},
  {path:'surgicalinstrument', component:SurgicalInstrumentsComponent},
  {path:'dressing', component:DressingComponent},
  {path:'gicare', component:GiCareComponent},
  {path:'urinary', component:UrinaryCareComponent},
  {path:'wound', component:WoundTreatmentComponent}
]


@NgModule({
  declarations: [
    RespiratorySuppliesComponent,
    SurgicalConsumablesComponent,
    IVinfusionComponent,
    SurgicalInstrumentsComponent,
    DressingComponent,
    GiCareComponent,
    UrinaryCareComponent,
    WoundTreatmentComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class SurgicalModule { }
