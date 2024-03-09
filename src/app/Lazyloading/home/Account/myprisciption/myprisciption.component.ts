import { Component } from '@angular/core';
import { API2Service } from 'src/app/Common/common-service.service';

@Component({
  selector: 'app-myprisciption',
  templateUrl: './myprisciption.component.html',
  styleUrls: ['./myprisciption.component.css']
})
export class MyprisciptionComponent {
  public imgSrc2:any=[];
  constructor(private ap2:API2Service){

  }
  ngOnInit(){
    this.catchedData();
  }

  catchedData(){
    this.ap2.Domdata.subscribe({
      next:(res:any)=>{
        console.log(res);
        this.imgSrc2=res


      },
      error:(err:any)=>console.log(err)
    })
  }

}
