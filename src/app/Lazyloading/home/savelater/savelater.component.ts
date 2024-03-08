import { Component, EventEmitter, Output } from '@angular/core';
import { DataTransferService, SavedService } from 'src/app/Common/data-transfer.service';

@Component({
  selector: 'app-savelater',
  templateUrl: './savelater.component.html',
  styleUrls: ['./savelater.component.css']
})
export class SavelaterComponent {
  @Output() send:any= new EventEmitter()
  public SaveItems:any=[];
  public flagitem:boolean=false;
  public catched:any=[];

  
  

  constructor(private Ds:DataTransferService, private sv:SavedService){
 
  }
  ngOnInit(){
    
  }



  addCart(data:any){
   this.send.emit(data);
   this.Ds.setCounter('0');
   this.removeProduct(data);
  }


  IncreseCount(data:any){

  }
  decreseCount(data:any){

  }

  removeProduct(data:any){
    var index=this.SaveItems.findIndex((x:any)=>x.id==data.id)
   this.SaveItems.splice(index,1);
  }

}
