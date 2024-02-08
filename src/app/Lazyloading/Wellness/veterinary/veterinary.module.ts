import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetCareComponent } from './pet-care/pet-care.component';
import { FarmAnimalsComponent } from './farm-animals/farm-animals.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes=[
  {path:'', component:PetCareComponent},
  {path:'farmanimal', component:FarmAnimalsComponent}
]

@NgModule({
  declarations: [
    PetCareComponent,
    FarmAnimalsComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class VeterinaryModule { }
