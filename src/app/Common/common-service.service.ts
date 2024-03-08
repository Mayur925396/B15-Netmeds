import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  private data: any = new BehaviorSubject("");
  public showdata: any = this.data.asObservable();

  private flag: any = new BehaviorSubject(false);
  public auth: any = this.flag.asObservable()
  constructor(private http: HttpClient) {

  }
  getApiData() {
    return this.http.get("http://localhost:3000/offers");
  }

  authset(data: any) {
    this.flag.next(data);
  }

  set(Data: any) {
    this.data.next(Data);
  }
}

@Injectable({
  providedIn: 'root'
})
export class API2Service {
  private Data: any = new BehaviorSubject("");
  public Domdata: any = this.Data.asObservable();
  constructor(private http: HttpClient) {

  }
  recievedata(){
    return this.http.get("http://localhost:3000/grooms");
  }
  getApiData() {
    return this.http.get("http://localhost:3000/review");
  }

  getDatafromAPI() {
    return this.http.get("http://localhost:3000/fragrances")
  }
  setData(data2: any) {
    this.Data.next([...this.Data.value, data2])
  }
}

@Injectable({
  providedIn: 'root'
})
export class WishlistProduct {

  public wishlist: any = [];
  private wish: any = new BehaviorSubject("");
  public List: any = this.wish.asObservable();


  private addCart: any = new BehaviorSubject("");
  public Cartitem: any = this.addCart.asObservable();


  constructor(private http: HttpClient) {

  }
 
  setData(product: any) {
   var index= this.wishlist.findIndex((x:any)=>x.id==product.id)
      if (index!==-1) {
        this.wishlist.splice(index, 1);
      }else{
        this.wishlist.push(product);
      }
    this.wish.next([...this.wishlist]);
  }

  AddProduct(item: any) {
    this.addCart.next([...this.addCart.value, item])
  }
}
