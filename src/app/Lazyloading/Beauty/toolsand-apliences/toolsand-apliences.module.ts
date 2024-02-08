import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSkinToolsComponent } from './face-skin-tools/face-skin-tools.component';
import { HairStylingToolsComponent } from './hair-styling-tools/hair-styling-tools.component';
import { MassageToolsComponent } from './massage-tools/massage-tools.component';
import { RouterModule, Routes } from '@angular/router';

const route:Routes=[
  {path:'', component:FaceSkinToolsComponent},
  {path:'hairstying', component:HairStylingToolsComponent},
  {path:'massage', component:MassageToolsComponent}
]

@NgModule({
  declarations: [
    FaceSkinToolsComponent,
    HairStylingToolsComponent,
    MassageToolsComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class ToolsandApliencesModule { }
