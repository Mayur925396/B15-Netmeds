import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataViewLayoutOptions } from 'primeng/dataview';
import { ConfirmboxComponent } from 'src/app/Common/Model/confirmbox/confirmbox.component';
import { WishlistProduct } from 'src/app/Common/common-service.service';
import { DataTransferService } from 'src/app/Common/data-transfer.service';
import { SavelaterComponent } from '../savelater/savelater.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
 
})
export class CartComponent{
  @ViewChild(ConfirmboxComponent) confirmbox: any;
  @ViewChild(SavelaterComponent) savefornext:any;

  public CartItemes: any = [];
  public EmptyCart: any = "../../../assets/Navbar/emptycart.svg";
  public CustDate: any = new Date(2024, 1, 19);
  public CustDate2: any = new Date(2024, 1, 20);
  public Flag:any;
  public quantity:any='1';
  public CartPrice:any=0;
  public quan:any=1;


  public targetProducts: any=[];

  layout: string = 'list';

  
  constructor(private cart: WishlistProduct, private router2: Router, private count: DataTransferService) {


  }
  ngOnInit() {
    this.ProductAdd();
    this.CartItemes.forEach((x:any)=>{
    this.CartPrice=this.CartPrice+ (+x.Price*this.quan)
    })
  }

  subPrice(data:any){
  
      this.CartPrice=this.CartPrice- data.Price
 
  }
  IncreseCount(data:any){
    data.quantity++;
    this.quan=data.quantity;
    this.CartPrice=this.CartPrice+(+data.Price)
    
  }
  decreseCount(data:any){
    data.quantity--;
    this.CartPrice=this.CartPrice-(+data.Price)
    if(data.quantity==0){
      this.CartPrice=this.CartPrice+(+data.Price)
      this.removed(data);
      
  
    }
  }
  ProductAdd() {
    this.cart.Cartitem.subscribe({
      next: (res: any) => {
        console.log(res);
        this.CartItemes = res;
        this.CartItemes.forEach((x:any)=>{
          x.quantity=1
        })
        

      },
      error: (err: any) => console.log(err)
    })
  }

  removeProduct(product: any) {
    var message: any = [`Are you sure want to remove your ${product.Product_Name} Product`,
      'Product Removed Successfully', 'Your Cart Item has been removed from Cart', 'Product Not removed', 'Your product has not been removed from cart',"Delete Confirmation"]
  
  this.confirmbox.confirm1(message,product);


  }
  
  removed(product:any){
    var index = this.CartItemes.findIndex((x: any) => x.id == product.id)
    this.CartItemes.splice(index, 1);
    this.count.setCounter(-1);
    this.subPrice(product)
  }


  onFlag(data:any){
    
    if(data.flag){
      this.removed(data);
    }
  }
  addProduct() {
    this.router2.navigate(["/home"]);
  }

  calldialogBox(product: any) {
    this.confirmbox.confirm1(product)
  }


  SaveLater(data:any){
    this.savefornext.SaveItems.push(data);
    this.removed(data);

  }

  fire(data:any){
    this.CartItemes.push(data);
    this.CartPrice=this.CartPrice+(+data.Price);

  }

  }
