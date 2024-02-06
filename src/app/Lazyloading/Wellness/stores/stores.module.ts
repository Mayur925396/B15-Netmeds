import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VitaminStoreComponent } from './vitamin-store/vitamin-store.component';
import { DremaCosmeticComponent } from './drema-cosmetic/drema-cosmetic.component';
import { DiabetiesCenterComponent } from './diabeties-center/diabeties-center.component';



@NgModule({
  declarations: [
    VitaminStoreComponent,
    DremaCosmeticComponent,
    DiabetiesCenterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StoresModule { }
