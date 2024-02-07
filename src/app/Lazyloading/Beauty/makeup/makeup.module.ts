import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EyesComponent } from './eyes/eyes.component';
import { FaceMakeupComponent } from './face-makeup/face-makeup.component';
import { LipsComponent } from './lips/lips.component';
import { MakeuptoolsComponent } from './makeuptools/makeuptools.component';
import { NailsComponent } from './nails/nails.component';
import { RouterModule, Routes } from '@angular/router';

const route:Routes=[
  {path:'', component:EyesComponent},
  {path:'facemakeup', component:FaceMakeupComponent},
  {path:'lips', component:LipsComponent},
  {path:'makeuptools', component:MakeuptoolsComponent},
  {path:'nails', component:NailsComponent}
]


@NgModule({
  declarations: [
    EyesComponent,
    FaceMakeupComponent,
    LipsComponent,
    MakeuptoolsComponent,
    NailsComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class MakeupModule { }
