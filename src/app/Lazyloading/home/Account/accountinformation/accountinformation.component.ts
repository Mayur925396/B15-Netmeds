import { AsyncPipe } from '@angular/common';
import { Component, EventEmitter, Output} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/Common/common-service.service';



@Component({
  selector: 'app-accountinformation',
  templateUrl: './accountinformation.component.html',
  styleUrls: ['./accountinformation.component.css']
})
export class AccountinformationComponent {
  @Output() DataCatched:any=new EventEmitter()
  public customerInfo: any;
  public CustomerInfo:any=[];
  public isFrmSub: boolean = false;
  public Gender:any=["Male","Female","Others","Unspecified"];
  public CustomerAge:any;



  constructor(private fb: FormBuilder, private db:CommonServiceService) {
    this.customerInfo = this.fb.group({
      fname: ['',[Validators.required]],
      lname: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      gender: [''],
      age: ['',[Validators.required]],
      phone:[''],
      

    })
    
    this.CustomerInfo.fname=localStorage.getItem('t1');
    this.CustomerInfo.lname=localStorage.getItem('t2');
    this.CustomerInfo.email=localStorage.getItem('t3');
    this.CustomerInfo.gender=localStorage.getItem('t4');
    this.CustomerInfo.age=localStorage.getItem('t5');
    // this.CustomerInfo.phone=localStorage.getItem('t6');
    this.phonerecieved();
  }
  ngOnInit(){
   
  }

onReset(){
  this.isFrmSub = false;
  this.customerInfo.reset();
}
CalculateAge(){
  const currentDate:any=new Date().getFullYear(); 
  var defaultage=localStorage.getItem('t5')
  var year:any=defaultage?.slice(0,4);
  this.CustomerAge=currentDate-parseInt(year,10);
}
  onSubmit() {
    this.isFrmSub = true;
    
    if(this.customerInfo.valid){
      console.log(this.customerInfo.value);
      this.CustomerInfo=this.customerInfo.value
      this.isFrmSub = false;
      this.customerInfo.reset();
    }
  }


  get valid(){
    return this.customerInfo.controls;
  }

  DataStore(){
    
    localStorage.setItem('t1',this.customerInfo.value.fname);
    localStorage.setItem('t2',this.customerInfo.value.lname);
    localStorage.setItem('t3',this.customerInfo.value.email);
    localStorage.setItem('t4',this.customerInfo.value.gender);
    localStorage.setItem('t5',this.customerInfo.value.age);
    localStorage.setItem('t6',this.customerInfo.value.phone);
    setTimeout(()=>this.DataSend(),1000);
    this.CalculateAge();
    
  
  }

  DataSend(){
    this.DataCatched.emit(this.CustomerInfo)
  }

  phonerecieved(){

    this.db.showdata.subscribe({
      next:(res:any)=>{
        console.log(res)
        this.CustomerInfo.phone=res;
        
      },
      error:(err:any)=>console.log(err)
    })
  }
  
  updateForm(){
    console.log(this.CustomerInfo);
   this.customerInfo.patchValue({...this.CustomerInfo})
  }


}


