import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeraVeComponent } from './cera-ve/cera-ve.component';
import { CetaphillComponent } from './cetaphill/cetaphill.component';



@NgModule({
  declarations: [
    CeraVeComponent,
    CetaphillComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TrendingModule { }
