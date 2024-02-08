import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VitaminStoreComponent } from './vitamin-store/vitamin-store.component';
import { DremaCosmeticComponent } from './drema-cosmetic/drema-cosmetic.component';
import { DiabetiesCenterComponent } from './diabeties-center/diabeties-center.component';
import { RouterModule, Routes } from '@angular/router';

const route:Routes=[
  {path:'', component:VitaminStoreComponent},
  {path:'drema', component:DremaCosmeticComponent},
  {path:'diabetiescenter', component:DiabetiesCenterComponent}
]

@NgModule({
  declarations: [
    VitaminStoreComponent,
    DremaCosmeticComponent,
    DiabetiesCenterComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class StoresModule { }
