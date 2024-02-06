import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AyurvedicComponent } from './ayurvedic/ayurvedic.component';
import { UnaniComponent } from './unani/unani.component';
import { HomeopathyComponent } from './homeopathy/homeopathy.component';
import { SiddhaComponent } from './siddha/siddha.component';



@NgModule({
  declarations: [
    AyurvedicComponent,
    UnaniComponent,
    HomeopathyComponent,
    SiddhaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AyushModule { }
