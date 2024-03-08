import { Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
 private count:any= new BehaviorSubject("0");
 public counter:any= this.count.asObservable();


 private profile:any=new BehaviorSubject("Sign In/ Sign Up");
 public profilename:any=this.profile.asObservable();


 profileinfo(name:any){
  this.profile.next(name);
 }

  constructor() { }

setCounter(measure:any){
this.count.next(measure)
}

}

@Injectable({
  providedIn:'root'
})
export class SavedService{
  private save:any = new BehaviorSubject("");
  public Save1:any=this.save.asObservable();

  setItem(data:any){
    this.save.next(data);
  }
}
