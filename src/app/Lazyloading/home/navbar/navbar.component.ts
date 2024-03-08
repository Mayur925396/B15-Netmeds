import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataTransferService } from 'src/app/Common/data-transfer.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone:false

})
export class NavbarComponent {
  public show:any='../../assets/valid_prescription (1).svg';
  public brandlogo:any="../../assets/Navbar/netmeds2.svg";
  public medicine:any="../../assets/Navbar/medicine.svg";
  public wellness:any="../../assets/Navbar/wellness.svg";
  public labtest:any="../../assets/Navbar/diagnostics.svg";
  public healthlibrary:any="../../assets/Navbar/health-library.svg";
  public pincode:any="411057";
  public Account:any;
  public sample10:any=true;
  
  public MathCounter:any=-1;
  constructor(private DS:DataTransferService, private DataProfile: DataTransferService, private route:Router){


  }
  ngOnInit(){
    this.IncreseCount();
    setTimeout(()=>this.recievedData(),2000);
  }

  recievedData(){
    this.DataProfile.profilename.subscribe({
      next:(res:any)=>{
        console.log(res);
        this.Account=res;
      },
      error:(err:any)=>console.log(err)
  })
}
  IncreseCount(){
    this.DS.counter.subscribe({
      next:(res:any)=>{
        console.log(res);
      if(res=="0")
        this.MathCounter++;
      else{
        this.MathCounter--
      }
        
        
      },
      error:(err:any)=>console.log(err)
    })
  }
  

  Auth(){
  var auth=sessionStorage.getItem('g1');
  
    if(auth=="true"){
      this.route.navigate(['home/accountinfo'])
    
   }else{
    this.route.navigate(['home/accountForm'])
   }
  }
}
