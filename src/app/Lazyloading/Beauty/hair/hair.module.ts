import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HairCareComponent } from './hair-care/hair-care.component';
import { HairColourComponent } from './hair-colour/hair-colour.component';
import { HairStylingComponent } from './hair-styling/hair-styling.component';
import { HairtoolsandAcessoriesComponent } from './hairtoolsand-acessories/hairtoolsand-acessories.component';
import { ScalpTreatmentsComponent } from './scalp-treatments/scalp-treatments.component';
import { ShopbyHairTypeComponent } from './shopby-hair-type/shopby-hair-type.component';



@NgModule({
  declarations: [
    HairCareComponent,
    HairColourComponent,
    HairStylingComponent,
    HairtoolsandAcessoriesComponent,
    ScalpTreatmentsComponent,
    ShopbyHairTypeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HairModule { }
