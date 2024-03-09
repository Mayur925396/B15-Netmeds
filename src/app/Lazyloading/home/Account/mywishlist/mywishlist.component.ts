import { Component, ViewChild } from '@angular/core';
import { ConfirmboxComponent } from 'src/app/Common/Model/confirmbox/confirmbox.component';
import { CommonServiceService, WishlistProduct } from 'src/app/Common/common-service.service';
import { DataTransferService } from 'src/app/Common/data-transfer.service';

@Component({
  selector: 'app-mywishlist',
  templateUrl: './mywishlist.component.html',
  styleUrls: ['./mywishlist.component.css']
})
export class MywishlistComponent {
  @ViewChild(ConfirmboxComponent) confirmbox: any;
  public wishlist: any = "../../../assets/Navbar/wishlist.png";
  public sample: any = true;
  public tempdata: any;

  public domData: any = [];






  constructor(private wish: WishlistProduct, private DS: DataTransferService) {

  }
  ngOnInit() {
    this.WishlistedData();

  }

  WishlistedData() {
    this.wish.List.subscribe({
      next: (res: any) => {
        console.log(res);
        this.domData = res;

      },
      error: (err: any) => console.log(err)
    })
  }



  removeProduct(product: any) {
    var message: any = [`Are you sure want to remove your ${product.Product_Name} Product from Wishlist`,
      'Product Removed Successfully', 'Your Loved product has been removed from wishlist', 'Product Not removed', 'Your product has not been removed from Wishlist','Delete Confirmation']

    this.confirmbox.confirm1(message, product);
    
  }
  count() {
    this.DS.setCounter('0');
  }

  AddtoCart(CartProduct: any) {

  var message: any = [`Are you sure want to add your ${CartProduct.Product_Name} Product in Cart`,
    'Product Added Successfully', 'Your Loved product has been added into the Cart', 'Product Not added', 'Your product has not been added into the Cart','Confirmation']

  this.confirmbox.confirm2(message, CartProduct);
    
  }
  onFlag(data: any) {
    if (data.flag) {
      this.removeitem(data);
    }
  }
  removeitem(product:any){
    var index = this.domData.findIndex((x: any) => x.id == product.id)
    this.domData.splice(index, 1);
  }

onFlag2(data:any){
  if(data.flag){
    this.additem(data);
  }
}

additem(CartProduct:any){
  this.wish.AddProduct(CartProduct);
  this.count();
  this.removeitem(CartProduct);
}
}




