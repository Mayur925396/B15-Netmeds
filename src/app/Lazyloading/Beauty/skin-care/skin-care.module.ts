import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AroMatherpyComponent } from './aro-matherpy/aro-matherpy.component';
import { CleansersComponent } from './cleansers/cleansers.component';
import { EyeCareComponent } from './eye-care/eye-care.component';
import { FaceSkinCareComponent } from './face-skin-care/face-skin-care.component';
import { MaskComponent } from './mask/mask.component';
import { MoisturieserComponent } from './moisturieser/moisturieser.component';
import { SunscreenComponent } from './sunscreen/sunscreen.component';
import { TonnersandSerumsComponent } from './tonnersand-serums/tonnersand-serums.component';
import { RouterModule, Routes } from '@angular/router';

const route:Routes=[
  {path:'', component:AroMatherpyComponent},
  {path:'cleansers', component:CleansersComponent},
  {path:'eyecare', component:EyeCareComponent},
  {path:'faceskincare', component:FaceSkinCareComponent},
  {path:'mask', component:MaskComponent},
  {path:'moisturiser', component:MoisturieserComponent},
  {path:'sunscreen', component:SunscreenComponent},
  {path:'tonner', component:TonnersandSerumsComponent}
]

@NgModule({
  declarations: [
    AroMatherpyComponent,
    CleansersComponent,
    EyeCareComponent,
    FaceSkinCareComponent,
    MaskComponent,
    MoisturieserComponent,
    SunscreenComponent,
    TonnersandSerumsComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class SkinCareModule { }
