import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WellnessHomeComponent } from './Lazyloading/Wellness/wellness-home/wellness-home.component';
import { BeautyComponent } from './Lazyloading/Beauty/beauty/beauty.component';
import { Custom1Pipe } from './Common/custom1.pipe';
import { Custom2Pipe } from './Common/custom2.pipe';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MessageService } from 'primeng/api';
import { NavbarComponent } from './Lazyloading/home/navbar/navbar.component';

import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { OverlaypanelComponent } from './Common/Model/overlaypanel/overlaypanel.component';




import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveformComponent } from './PushApiData/reactiveform/reactiveform.component';
import { HttpClientModule } from '@angular/common/http'
import { CustDirective } from './Common/cust.directive';


@NgModule({
  declarations: [
    AppComponent,
    WellnessHomeComponent,
    BeautyComponent,
    Custom1Pipe,
    Custom2Pipe,

    NavbarComponent,
    OverlaypanelComponent,



   

    CustDirective,
    ReactiveformComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,

    BrowserAnimationsModule,
    HttpClientModule,
    ToastModule,
    ConfirmDialogModule,
    ButtonModule,
    RippleModule,

  
    ReactiveFormsModule,
 

  ],

  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
