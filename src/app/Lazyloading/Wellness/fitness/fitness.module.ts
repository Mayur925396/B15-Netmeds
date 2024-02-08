import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeightManagementComponent } from './weight-management/weight-management.component';
import { SupplimentsComponent } from './suppliments/suppliments.component';
import { SmokingSupportComponent } from './smoking-support/smoking-support.component';
import { VitaminsComponent } from './vitamins/vitamins.component';
import { FamilyComponent } from './family/family.component';
import { HealthFoodComponent } from './health-food/health-food.component';
import { AyurvedicsuppComponent } from './ayurvedicsupp/ayurvedicsupp.component';
import { RouterModule, Routes } from '@angular/router';

const route:Routes=[
  {path:'', component:WeightManagementComponent},
  {path:'suppliments', component:SupplimentsComponent},
  {path:'smoking', component:SmokingSupportComponent},
  {path:'vitamins', component:VitaminsComponent},
  {path:'family', component:FamilyComponent},
  {path:'healthfood', component:HealthFoodComponent},
  {path:'ayurvedicsuppl', component:AyurvedicsuppComponent}
]


@NgModule({
  declarations: [
    WeightManagementComponent,
    SupplimentsComponent,
    SmokingSupportComponent,
    VitaminsComponent,
    FamilyComponent,
    HealthFoodComponent,
    AyurvedicsuppComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class FitnessModule { }
