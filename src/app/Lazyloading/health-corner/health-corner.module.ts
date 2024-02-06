import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HealthLibraryComponent } from './health-library/health-library.component';
import { PetientsAlikeComponent } from './petients-alike/petients-alike.component';
import { AllaboutCancerComponent } from './allabout-cancer/allabout-cancer.component';
import { CoronaAwarenessComponent } from './corona-awareness/corona-awareness.component';



@NgModule({
  declarations: [
    HealthLibraryComponent,
    PetientsAlikeComponent,
    AllaboutCancerComponent,
    CoronaAwarenessComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HealthCornerModule { }
