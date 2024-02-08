import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WomensCareComponent } from './womens-care/womens-care.component';
import { BoneJointpainComponent } from './bone-jointpain/bone-jointpain.component';
import { LivercareComponent } from './livercare/livercare.component';
import { PilescareComponent } from './pilescare/pilescare.component';
import { WeightcareComponent } from './weightcare/weightcare.component';
import { StomachCareComponent } from './stomach-care/stomach-care.component';
import { MentalCareComponent } from './mental-care/mental-care.component';
import { DAddictionComponent } from './d-addiction/d-addiction.component';
import { DiabeticCareComponent } from './diabetic-care/diabetic-care.component';
import { CardiacCareComponent } from './cardiac-care/cardiac-care.component';
import { ColdandFeverComponent } from './coldand-fever/coldand-fever.component';
import { ImmunityComponent } from './immunity/immunity.component';
import { LoungeCareComponent } from './lounge-care/lounge-care.component';
import { RouterModule, Routes } from '@angular/router';

const route:Routes=[
  {path:'', component:WomensCareComponent},
  {path:'bonejoint', component:BoneJointpainComponent},
  {path:'liver', component:LivercareComponent},
  {path:'piles', component:PilescareComponent},
  {path:'weightcare', component:WeightcareComponent},
  {path:'stomach', component:StomachCareComponent},
  {path:'mental', component:MentalCareComponent},
  {path:'daddiction', component:DAddictionComponent},
  {path:'diabeticcare', component:DiabeticCareComponent },
  {path:'cardiaccare', component:CardiacCareComponent},
  {path:'coldfever', component:ColdandFeverComponent},
  {path:'immunity', component:ImmunityComponent},
  {path:'lounge', component:LoungeCareComponent}
]

@NgModule({
  declarations: [
    WomensCareComponent,
    BoneJointpainComponent,
    LivercareComponent,
    PilescareComponent,
    WeightcareComponent,
    StomachCareComponent,
    MentalCareComponent,
    DAddictionComponent,
    DiabeticCareComponent,
    CardiacCareComponent,
    ColdandFeverComponent,
    ImmunityComponent,
    LoungeCareComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class HealthConditionsModule { }
