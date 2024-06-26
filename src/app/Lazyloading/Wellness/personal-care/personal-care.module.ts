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
import { RouterModule, Routes } from '@angular/router';

const route:Routes=[
  {path:'', component:HomeandHealthComponent},
  {path:'seniorcare', component:SeniorCareComponent},
  {path:'facepersonal', component:FacePersonalCareComponent},
  {path:'handsandfeet', component:HandsandFeetComponent},
  {path:'oralcare', component:OralCareComponent},
  {path:'bathshower', component:BathandShowerComponent},
  {path:'bodycare', component:BodyCareComponent},
  {path:'toolsandacc', component:ToolsandaccessoriesComponent},
  {path:'lipcare', component:LipCareComponent},
  {path:'bathingacc', component:BathingAceessoriesComponent}
]

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
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class PersonalCareModule { }
