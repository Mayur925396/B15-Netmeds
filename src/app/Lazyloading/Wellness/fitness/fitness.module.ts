import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeightManagementComponent } from './weight-management/weight-management.component';
import { SupplimentsComponent } from './suppliments/suppliments.component';
import { SmokingSupportComponent } from './smoking-support/smoking-support.component';
import { VitaminsComponent } from './vitamins/vitamins.component';
import { FamilyComponent } from './family/family.component';
import { HealthFoodComponent } from './health-food/health-food.component';
import { AyurvedicsuppComponent } from './ayurvedicsupp/ayurvedicsupp.component';



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
    CommonModule
  ]
})
export class FitnessModule { }
