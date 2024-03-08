import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonServiceService} from 'src/app/Common/common-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  public value:boolean=false;
  constructor(private db:CommonServiceService){
    this.Activation()
  }
 
    

  Activation(){
    this.db.auth.subscribe({
      next:(res:any)=>{
        this.value=res;
       sessionStorage.setItem('g1',res);
     

      },
      error:(err:any)=>console.log(err)
    })
  }
  canActivate (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any | UrlTree> | Promise<any | UrlTree> | any | UrlTree {
    
    return this.value;
  }
  
}
