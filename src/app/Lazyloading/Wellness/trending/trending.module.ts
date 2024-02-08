import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeraVeComponent } from './cera-ve/cera-ve.component';
import { CetaphillComponent } from './cetaphill/cetaphill.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes=[
  {path:'', component:CeraVeComponent},
  {path:'cetaphill', component:CetaphillComponent}
]

@NgModule({
  declarations: [
    CeraVeComponent,
    CetaphillComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class TrendingModule { }
