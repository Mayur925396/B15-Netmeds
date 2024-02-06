import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EyesComponent } from './eyes/eyes.component';
import { FaceMakeupComponent } from './face-makeup/face-makeup.component';
import { LipsComponent } from './lips/lips.component';
import { MakeuptoolsComponent } from './makeuptools/makeuptools.component';
import { NailsComponent } from './nails/nails.component';



@NgModule({
  declarations: [
    EyesComponent,
    FaceMakeupComponent,
    LipsComponent,
    MakeuptoolsComponent,
    NailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MakeupModule { }
