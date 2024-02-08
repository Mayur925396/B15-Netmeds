import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WellnessHomeComponent } from './Lazyloading/Wellness/wellness-home/wellness-home.component';
import { BeautyComponent } from './Lazyloading/Beauty/beauty/beauty.component';
import { Custom1Pipe } from './Common/custom1.pipe';
import { Custom2Pipe } from './Common/custom2.pipe';
import { CustDirective } from './Common/cust.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveformComponent } from './PushApiData/reactiveform/reactiveform.component';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    WellnessHomeComponent,
    BeautyComponent,
    Custom1Pipe,
    Custom2Pipe,
    CustDirective,
    ReactiveformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,

    BrowserAnimationsModule
=======
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
