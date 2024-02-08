import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AyurvedicComponent } from './ayurvedic/ayurvedic.component';
import { UnaniComponent } from './unani/unani.component';
import { HomeopathyComponent } from './homeopathy/homeopathy.component';
import { SiddhaComponent } from './siddha/siddha.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes=[
  {path:'', component:AyurvedicComponent},
  {path:'homeopathy', component:HomeopathyComponent},
  {path:'siddha', component:SiddhaComponent},
  {path:'unani', component:UnaniComponent}
]

@NgModule({
  declarations: [
    AyurvedicComponent,
    UnaniComponent,
    HomeopathyComponent,
    SiddhaComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class AyushModule { }
