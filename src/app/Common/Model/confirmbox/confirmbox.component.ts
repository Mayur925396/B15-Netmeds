import { Component, EventEmitter, Output } from '@angular/core';
import { ConfirmEventType, ConfirmationService, MessageService } from 'primeng/api';
import {ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';


@Component({
  selector: 'app-confirmbox',
  templateUrl: './confirmbox.component.html',
  styleUrls: ['./confirmbox.component.css'],
  providers: [ConfirmationService, MessageService],
  imports:[ToastModule,ConfirmDialogModule],
  standalone:true,
})
export class ConfirmboxComponent {
  @Output() flagsender:any=new EventEmitter();
  @Output() flagsender2:any=new EventEmitter()
  

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

  confirm1(data:any,data2:any) {
    
    this.confirmationService.confirm({
        message: data[0],
        header: data[5],
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          data2.flag=true;
          this.flagsender.emit(data2);
            this.messageService.add({ severity: 'success', summary:data[1], detail: data[2] });
          
          },
        reject: (type:any) => {
          data2.flag=false;
          this.flagsender.emit(data2)
            switch (type) {
                case ConfirmEventType.REJECT:
                    this.messageService.add({ severity: 'error', summary: data[3], detail: data[4] });
                    break; 
                case ConfirmEventType.CANCEL:
                    this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled' });
                    break;
            }
          
        }
    });
}

confirm2(data:any,data2:any) {
    this.confirmationService.confirm({
        message: data[0],
        header: data[5],
        icon: 'pi pi-info-circle',
        accept: () => {
          data2.flag=true;
          this.flagsender2.emit(data2);
          this.messageService.add({ severity: 'success', summary:data[1], detail:data[2] });
        },
        reject: (type:any) => {
          data2.flag=false;
          this.flagsender2.emit(data2)
            switch (type) {
                case ConfirmEventType.REJECT:
                    this.messageService.add({ severity: 'error', summary: data[3], detail: data[4] });
                    break;
                case ConfirmEventType.CANCEL:
                    this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled' });
                    break;
            }
        }
    });
}
}
