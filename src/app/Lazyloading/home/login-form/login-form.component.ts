import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CommonServiceService } from 'src/app/Common/common-service.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  @ViewChild ('myInput') myInput: ElementRef | any;
  public showbanner="../..../../assets/Navbar/1680000865_New_Dest_deal (1).png"
  public googlebtn="../../../assets/Navbar/google-icon.png"
  public fbbtn="../../../assets/Navbar/facebook-icon.png";
  public storedData:any;
  public sampleFlag:boolean=true;
  public num:any;
  public otp:any='';
  public phone:any;
  constructor(private db:CommonServiceService, private routes: Router,private messageService:MessageService){
 
  }
  ngOnInit(){
    this.getData()
  
  }
  ngAfterViewInit() {
    this.myInput.nativeElement.focus();
  }
  onSubmit(data:any){
    this.phone=data.value.phone;
    console.log(this.phone);
    this.createotp();
   setTimeout(()=>this.PhoneSend(),2000);
 

  }
  createotp(){
    this.num=Math.floor(Math.random() * 900000) + 100000;
    console.log(this.num);
    this.sampleFlag=false;
    this.messageService.add({ severity: 'success', summary: 'Success', detail: `Please Enter Credentials:
    ${this.num}`});

   
  }
  verifyotp(){
 if(this.otp==this.num){
      this.routes.navigate(['home/accountinfo'])
    }
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'You Entered Wrong Credentials' });
  this.db.authset(true);
  }

  DataSend(data:any){
   this.db.set(data);   
  }

  PhoneSend(){
    this.db.set(this.phone)
  }
  getData(){
    this.db.getApiData().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.storedData=res;
      },
      error:(err:any)=>console.log(err)
    })
  }

}
