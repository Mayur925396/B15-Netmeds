import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetCareComponent } from './pet-care/pet-care.component';
import { FarmAnimalsComponent } from './farm-animals/farm-animals.component';



@NgModule({
  declarations: [
    PetCareComponent,
    FarmAnimalsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VeterinaryModule { }
