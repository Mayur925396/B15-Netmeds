import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeandHealthComponent } from './homeand-health/homeand-health.component';
import { SeniorCareComponent } from './senior-care/senior-care.component';
import { FacePersonalCareComponent } from './face-personal-care/face-personal-care.component';
import { HandsandFeetComponent } from './handsand-feet/handsand-feet.component';
import { OralCareComponent } from './oral-care/oral-care.component';
import { BathandShowerComponent } from './bathand-shower/bathand-shower.component';
import { BodyCareComponent } from './body-care/body-care.component';
import { ToolsandaccessoriesComponent } from './toolsandaccessories/toolsandaccessories.component';
import { LipCareComponent } from './lip-care/lip-care.component';
import { BathingAceessoriesComponent } from './bathing-aceessories/bathing-aceessories.component';



@NgModule({
  declarations: [
    HomeandHealthComponent,
    SeniorCareComponent,
    FacePersonalCareComponent,
    HandsandFeetComponent,
    OralCareComponent,
    BathandShowerComponent,
    BodyCareComponent,
    ToolsandaccessoriesComponent,
    LipCareComponent,
    BathingAceessoriesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PersonalCareModule { }
