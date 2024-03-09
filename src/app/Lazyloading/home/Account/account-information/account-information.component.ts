import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AccountinformationComponent } from '../accountinformation/accountinformation.component';
import { DataTransferService } from 'src/app/Common/data-transfer.service';

@Component({
  selector: 'app-account-information',
  templateUrl: './account-information.component.html',
  styleUrls: ['./account-information.component.css']
})
export class AccountInformationComponent {
  @ViewChild(AccountinformationComponent) Datastore: any;



  public DomData: any;
  public ban1 = "../../../../assets/Navbar/payment_history.svg";
  public ban2 = "../../../../assets/Navbar/medicine_orders.svg";
  public ban3 = "../../../../assets/Navbar/rewards.svg";
  public sample3: any = 40;
  public style2: any;
  public showDataFlag: any = "test4";
  public ProfileName: string = "";
  public ProfileEmail: string = "";
  public ProfilePhone: String = "";
  public BannerName: any = "Your Account"
  public sample5: string = ''

  toggleIcon(icon: string) {
    this.sample5 = icon === this.sample5 ? '' : icon;
  }



  constructor(private route: Router,private DataProfile:DataTransferService) {
    if (this.sample3 == 20) {
      this.style2 = 'ClassA'
    } else if (this.sample3 == 40) {
      this.style2 = 'ClassB'
    }
    else if (this.sample3 == 60) {
      this.style2 = 'ClassC'
    } else if (this.sample3 == 80) {
      this.style2 = 'ClassD'
    } else if (this.sample3 == 100) {
      this.style2 = 'ClassE'
    }
  }

  RecivedData(Data: any) {
    this.DomData = Data;
    this.DataTransferd();
  }
  ngOnInit(){
    
  }

  ngAfterViewInit() {
    this.ProfileEmail = this.Datastore.CustomerInfo.email;
    this.ProfilePhone = this.Datastore.CustomerInfo.phone;
    this.ProfileName = this.Datastore.CustomerInfo.fname + " " + this.Datastore.CustomerInfo.lname;
    this.sendData();
  }


  DataTransferd() {
    this.ProfileName = this.DomData.fname + " " + this.DomData.lname
    this.ProfileEmail = this.DomData.email
    this.ProfilePhone = this.DomData.phone


  }


  sendData(){
    this.DataProfile.profileinfo(this.ProfileName);
  }
  enable1() {
    this.showDataFlag = 'test1';
    this.BannerName = "Payment-Methods"




  }
  enable2() {
    this.showDataFlag = 'test2';
    this.BannerName = "Medicine-Orders"


  }
  enable3() {
    this.showDataFlag = 'test3';
    this.BannerName = "My Rewards"


  }
  enable4() {
    this.showDataFlag = "test4"
    this.BannerName = "Your Account"
  }
  enable5() {
    this.showDataFlag = "test5"
    this.BannerName = "My Wallet"
  }
  enable6() {
    this.showDataFlag = "test6"
    this.BannerName = "My Wishlist"
  }
  enable7() {
    this.showDataFlag = "test7"
    this.BannerName = "Netmeds-First Membership"
  }
  enable8() {
    this.showDataFlag = "test8"
    this.BannerName = "Delivery Address"
  }
  enable9() {
    this.showDataFlag = "test9"
    this.BannerName = "Priscription"
  }
  enable10() {
    this.showDataFlag = "test10"
    this.BannerName = "My Subscription"
  }
  enable11() {
    this.showDataFlag = "test11"
    this.BannerName = "Refer and Earns"
  }
  enable12() {
    this.showDataFlag = "test12"
    this.BannerName = "Rate Us"
  }
}
