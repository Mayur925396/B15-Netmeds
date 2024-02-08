import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HealthLibraryComponent } from './health-library/health-library.component';
import { PetientsAlikeComponent } from './petients-alike/petients-alike.component';
import { AllaboutCancerComponent } from './allabout-cancer/allabout-cancer.component';
import { CoronaAwarenessComponent } from './corona-awareness/corona-awareness.component';
import { RouterModule, Routes } from '@angular/router';

const route:Routes=[
  {path:'', component:HealthLibraryComponent},
  {path:'petientsalike', component:PetientsAlikeComponent},
  {path:'allaboutcancer', component:AllaboutCancerComponent},
  {path:'coronaaware', component:CoronaAwarenessComponent},
]

@NgModule({
  declarations: [
    HealthLibraryComponent,
    PetientsAlikeComponent,
    AllaboutCancerComponent,
    CoronaAwarenessComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class HealthCornerModule { }
