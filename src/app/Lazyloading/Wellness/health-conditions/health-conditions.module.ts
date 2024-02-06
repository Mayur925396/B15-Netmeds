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
    CommonModule
  ]
})
export class HealthConditionsModule { }
