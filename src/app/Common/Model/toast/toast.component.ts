import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';


@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
  standalone:true,
  imports:[ToastModule]

})
export class ToastComponent {
  constructor(private messageService: MessageService) {}

  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
}
}
