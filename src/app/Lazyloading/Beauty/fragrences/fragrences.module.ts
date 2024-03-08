import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenComponent } from './men/men.component';
import { FemaleComponent } from './female/female.component';
import { UnisexComponent } from './unisex/unisex.component';
import { RouterModule, Routes } from '@angular/router';
import { ThemeDirective } from './theme.directive';
import { ImageModule } from 'primeng/image';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
// import { ProductService } from 'src/app/Common/Service/service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import { HoststyleDirective } from './common/hoststyle.directive';
import { ConfirmboxComponent } from 'src/app/Common/Model/confirmbox/confirmbox.component';
import { RippleModule } from 'primeng/ripple';
// import { DeferModule } from 'primeng/defer';
import { PaginatorModule } from 'primeng/paginator';
import { ChipModule } from 'primeng/chip';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { CarouselComponent } from 'src/app/Common/Model/carousel/carousel.component';
import { ToastComponent } from 'src/app/Common/Model/toast/toast.component';






const route:Routes=[
  {path:'', component:MenComponent},
  {path:'female', component:FemaleComponent},
  {path:'unisex',component:UnisexComponent}
]

@NgModule({
  declarations: [
    MenComponent,
    FemaleComponent,
    UnisexComponent,
    ThemeDirective,
    HoststyleDirective,

    
    // CustDirective
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)],
    ImageModule,
    ToastModule,
    CarouselModule,
    ButtonModule,
    TagModule,
    ConfirmDialogModule,
    MessagesModule,
    ConfirmboxComponent,
    RippleModule,
    PaginatorModule,
    ChipModule,
    OverlayPanelModule,
    CarouselComponent,
    ToastComponent
    
   
  ], 
  providers:[MessageService,ConfirmationService]
})
export class FragrencesModule { }
