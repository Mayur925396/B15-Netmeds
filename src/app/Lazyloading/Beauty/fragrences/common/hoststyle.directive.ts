import { Directive, ElementRef, HostListener } from '@angular/core';



@Directive({
  selector: '[appHoststyle]'
})
export class HoststyleDirective {

public flag:any=true;
public style1:any;
public style2:any;
  constructor(private cs:ElementRef) { 
 this.style1=localStorage.getItem('s1')
 this.style2=localStorage.getItem('s2')
  }

  @HostListener('click') onclick() {
  
    if(this.flag){
      this.cs.nativeElement.style.color = this.style1
      localStorage.setItem('s1','#24AEB1')
   
      this.flag=!this.flag;
 
    }else{
      this.cs.nativeElement.style.color = this.style2
      localStorage.setItem('s2','rgb(226, 226, 226)')
      this.flag=!this.flag;

    }
  
  }



}



