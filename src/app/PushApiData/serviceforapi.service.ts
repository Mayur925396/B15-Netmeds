import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceforapiService {

  constructor(private ht:HttpClient) { }

  sendtoapi(dt:any){
    return this.ht.post('http://localhost:3000/ayush',dt)
  }
}
