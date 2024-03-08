import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTheme]'
})
export class ThemeDirective {

  constructor(private cs: ElementRef) { 
  this.cs.nativeElement.style.color="white"
  this.cs.nativeElement.style.background='#24AEB1'
  this.cs.nativeElement.style.fontWeight='Bold'
  this.cs.nativeElement.style.lineHeight='40px'
  this.cs.nativeElement.style.border='none'
  this.cs.nativeElement.style.borderRadius='5px'
  
 }

}