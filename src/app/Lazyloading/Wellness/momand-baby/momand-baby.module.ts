import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BabyCareComponent } from './baby-care/baby-care.component';
import { FeminineHeigineComponent } from './feminine-heigine/feminine-heigine.component';
import { MaternityCareComponent } from './maternity-care/maternity-care.component';
import { MaternityAccessoriesComponent } from './maternity-accessories/maternity-accessories.component';
import { ToysandGamesComponent } from './toysand-games/toysand-games.component';
import { BabyBathTimeComponent } from './baby-bath-time/baby-bath-time.component';



@NgModule({
  declarations: [
    BabyCareComponent,
    FeminineHeigineComponent,
    MaternityCareComponent,
    MaternityAccessoriesComponent,
    ToysandGamesComponent,
    BabyBathTimeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MomandBabyModule { }
