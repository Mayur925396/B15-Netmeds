import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllMedicineComponent } from './all-medicine/all-medicine.component';
import { BuyagainComponent } from './buyagain/buyagain.component';
import { OrderonlineComponent } from './orderonline/orderonline.component';



@NgModule({
  declarations: [
    AllMedicineComponent,
    BuyagainComponent,
    OrderonlineComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MedicineModule { }
