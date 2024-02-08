import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServiceforapiService } from '../serviceforapi.service';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {
public formdata:any = [];

constructor(private fb:FormBuilder,private ss:ServiceforapiService){
  this.formdata = this.fb.group({
    id:[''],
    discount:[''],
    imagepath:null,
    rating:[],
    productname:[''],
    manifactorer:[''],
    price:[],
    MRP:[],
    category:[''],
    brands:['']
  })
}

getdata(){
  console.log(this.formdata.value);
  const alldata = this.formdata.value;
  this.postdata(alldata);
}

postdata(data1:any){
  this.ss.sendtoapi(data1).subscribe({
    next:(dt:any)=>{
      console.log(dt);
    },
    error:(er:any)=>{
      console.log(er);
    }
  })
}
}
