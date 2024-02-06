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
    CommonModule
  ]
})
export class SurgicalModule { }
