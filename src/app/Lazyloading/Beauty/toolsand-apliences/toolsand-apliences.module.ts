import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSkinToolsComponent } from './face-skin-tools/face-skin-tools.component';
import { HairStylingToolsComponent } from './hair-styling-tools/hair-styling-tools.component';
import { MassageToolsComponent } from './massage-tools/massage-tools.component';



@NgModule({
  declarations: [
    FaceSkinToolsComponent,
    HairStylingToolsComponent,
    MassageToolsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ToolsandApliencesModule { }
