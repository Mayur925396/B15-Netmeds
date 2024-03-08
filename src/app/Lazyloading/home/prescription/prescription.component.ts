import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { API2Service } from 'src/app/Common/common-service.service';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent {
  public show: any = '../../assets/Navbar/valid_prescription (1).svg';
  public brandlogo: any = "../../assets/Navbar/netmeds2.svg";
  public customerReview: any;
  public customerReview2: any;
  public customerReview3: any;
  public sample: any = true;
  public sample2: any = true;
  public sample3: any = true;
  public temprory: any;
  public temprory2: any = true;
  public treat: any = false;

  public imgpres: any = '../../assets/Navbar/upload-prescription.svg';
  selectedFile: File | null = null;
  imageSrc: string | ArrayBuffer | null = null;





  constructor(private ap2: API2Service, private r2: Router) {

  }

  disableCard() {
    this.sample3 = !this.sample3;
    this.sample2 = !this.sample2;
    this.treat = !this.treat;
  }
  onclick() {
    this.sample = !this.sample;

  }
  ngOnInit() {
    this.getData();



  }
  getData() {
    this.ap2.getApiData().subscribe({
      next: (res: any) => {
        console.log(res);
        this.customerReview = res;   


      },
      error: (err: any) => console.log(err)
    })
  }


  triggerFileInput() {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  }
  fileSelect(event: any) {
    const selectedFile = event.target.files[0];
    console.log('File selected:', selectedFile);
    const reader = new FileReader();
    reader.onload = () => {
      this.imageSrc = reader.result;
    };
    reader.readAsDataURL(selectedFile);
    
    this.sample2 = !this.sample2;
    if (this.sample2 == false) {
      this.treat = !this.treat;
    }
    this.sample3 = !this.sample3;
  }

  datasend() {
    this.ap2.setData(this.imageSrc);
    this.r2.navigate(['home/mypriscription'])
  }
}
