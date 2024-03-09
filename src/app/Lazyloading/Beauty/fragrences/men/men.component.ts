import { Component, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService,ConfirmEventType  } from 'primeng/api';
import { OverlayPanel } from 'primeng/overlaypanel';
import { Observable, merge, take } from 'rxjs';
import { ConfirmboxComponent } from 'src/app/Common/Model/confirmbox/confirmbox.component';

import { API2Service, WishlistProduct } from 'src/app/Common/common-service.service';
import { DataTransferService } from 'src/app/Common/data-transfer.service';


@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css'], 
  providers:[MessageService,ConfirmationService]

})
export class MenComponent {
  @ViewChild(ConfirmboxComponent) confirmbox:any


  public CardData: any=[];
  public temp: any = 1;
  public BtnChange: any = true;
  public sample6: any;
  public wishlistedFlag: boolean = true;
  public mathcount: any = 1;
  public flag: any = true;
  public sample8:any=true;
  public Style1:any;
  public sampled:any;
  public Data:any=[];



  




  constructor(private api: API2Service, private wish: WishlistProduct, private DS:DataTransferService, private messageService:MessageService,private confirmationService: ConfirmationService) {
   
  }
  ngOnInit() {
    this.recieveData();
    


  }

  recieveData() {
    const obs1:any=this.api.getDatafromAPI();
    const obs2:any=this.api.recievedata();
 merge(obs1,obs2).subscribe({
      next: (res: any) => {
        console.log(res);
        this.CardData.push(res);
        this.CardData=this.CardData.flat();
        this.Data=this.CardData.slice(0,8)
      },
      error: (err: any) => console.log(err)
    })
  }


  count() {
    this.DS.setCounter("0");

    this.BtnChange = false;

  }
  addProduct(product: any) {
    var message: any = [`Are you sure want to add your ${product.Product_Name} Product in Cart`,
    'Product Added Successfully', 'Your product has been added into the Cart', 'Product Not added', 'Your product has not been added into the Cart','Confirmation']
    this.confirmbox.confirm2(message,product)
    product.flag=true;
    if(product.flag){
      product.flag=!product.flag;

    }
  }

  addwish(data: any) {
    this.wish.setData(data);
    this.show(data); 
  }

  onFlag2(data:any){
   if(data.flag){
    this.additem(data)
   }
  }

  additem(product:any){
    this.wish.AddProduct(product);
    this.count();  
  }



show(data:any) {
  
  if(data.flags){
  this.messageService.add({ severity: 'success', summary: 'Your Product added into Wishlist', detail: `Your Loved ${data.Brands} product has been added into Wishlist` });
 

  data.flags=!data.flags;
}else{
    this.messageService.add({ severity: 'error', summary: 'Your Product removed from Wishlist', detail: `Your wishlisted ${data.Brands} product has been removed from Wishlist` });
    data.flags=!data.flags;
  }
}

first: number = 0;

rows: number = 2;

onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    this.loadData();
}
loadData(){
  this.Data=this.CardData.slice(this.first, this.first + this.rows)
}


decreseCount(data:any){

}
IncreseCount(data:any){

}
}
