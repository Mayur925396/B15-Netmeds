import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllMedicineComponent } from './all-medicine/all-medicine.component';
import { BuyagainComponent } from './buyagain/buyagain.component';
import { OrderonlineComponent } from './orderonline/orderonline.component';
import { RouterModule, Routes } from '@angular/router';

const route:Routes=[
  {path:'', component:AllMedicineComponent},
  {path:'buyagain', component:BuyagainComponent},
  {path:'orderonline', component:OrderonlineComponent}
]

@NgModule({
  declarations: [
    AllMedicineComponent,
    BuyagainComponent,
    OrderonlineComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class MedicineModule { }
