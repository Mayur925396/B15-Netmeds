import { Component, ViewChild} from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastComponent } from 'src/app/Common/Model/toast/toast.component';



@Component({
  selector: 'app-female',
  templateUrl: './female.component.html',
  styleUrls: ['./female.component.css'],
  providers:[ToastComponent,MessageService]


 
})
export class FemaleComponent{
@ViewChild(ToastComponent) toast:any
messageService: any;
constructor(){

}
onClick(){
this.toast.show()
}


}
