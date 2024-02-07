import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BabyCareComponent } from './baby-care/baby-care.component';
import { FeminineHeigineComponent } from './feminine-heigine/feminine-heigine.component';
import { MaternityCareComponent } from './maternity-care/maternity-care.component';
import { MaternityAccessoriesComponent } from './maternity-accessories/maternity-accessories.component';
import { ToysandGamesComponent } from './toysand-games/toysand-games.component';
import { BabyBathTimeComponent } from './baby-bath-time/baby-bath-time.component';
import { RouterModule, Routes } from '@angular/router';

const route:Routes=[
  {path:'', component:BabyCareComponent},
  {path:'feminine', component:FeminineHeigineComponent},
  {path:'maternitycare', component:MaternityCareComponent},
  {path:'materinityaccessories', component:MaternityAccessoriesComponent},
  {path:'babybath', component:BabyBathTimeComponent},
  {path:'toysandgames', component:ToysandGamesComponent}
]

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
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class MomandBabyModule { }
