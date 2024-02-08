import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrescriptionComponent } from './prescription/prescription.component';
import { OffersComponent } from './offers/offers.component';
import { CartComponent } from './cart/cart.component';
import { HomebodyComponent } from './homebody/homebody.component';
import { AboutNetmedsComponent } from './Footer/about-netmeds/about-netmeds.component';
import { CustomerSpeakComponent } from './Footer/customer-speak/customer-speak.component';
import { IntheNewsComponent } from './Footer/inthe-news/inthe-news.component';
import { TermsandConditionComponent } from './Footer/termsand-condition/termsand-condition.component';
import { PrivacyPolicyComponent } from './Footer/privacy-policy/privacy-policy.component';
import { FeesandPayementPolicyComponent } from './Footer/feesand-payement-policy/feesand-payement-policy.component';
import { ShippingandDeliveryPolicyComponent } from './Footer/shippingand-delivery-policy/shippingand-delivery-policy.component';
import { RefundPolicyComponent } from './Footer/refund-policy/refund-policy.component';
import { HealthArticlesComponent } from './Footer/health-articles/health-articles.component';
import { FAQSComponent } from './Footer/faqs/faqs.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AccountInformationComponent } from './Account/account-information/account-information.component';
import { MyWalletComponent } from './Account/my-wallet/my-wallet.component';
import { MywishlistComponent } from './Account/mywishlist/mywishlist.component';
import { NetmedsMembershipComponent } from './Account/netmeds-membership/netmeds-membership.component';
import { DeliveryAddressComponent } from './Account/delivery-address/delivery-address.component';
import { MyprisciptionComponent } from './Account/myprisciption/myprisciption.component';
import { MySubscriptionComponent } from './Account/my-subscription/my-subscription.component';
import { ReferandEarnsComponent } from './Account/referand-earns/referand-earns.component';
import { RateUsComponent } from './Account/rate-us/rate-us.component';
import { PaymentMethodsComponent } from './Account/payment-methods/payment-methods.component';
import { MedicineOrdersComponent } from './Account/medicine-orders/medicine-orders.component';
import { MyRewardsComponent } from './Account/my-rewards/my-rewards.component';
import { FooterbarComponent } from './Footer/footerbar/footerbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './Footer/contact-us/contact-us.component';

const route:Routes=[
  {path:'', component:HomebodyComponent },
  {path:'navbar',component:NavbarComponent},
  {path:'prescription',component:PrescriptionComponent},
  {path:'offer', component:OffersComponent},
  {path:'cart', component:CartComponent},
  {path:'accountinfo', component:AccountInformationComponent},
  {path:'mywallet',component:MyWalletComponent},
  {path:'mywishlist', component:MywishlistComponent},
  {path:'accountForm', component:LoginFormComponent},
  {path:'netmedsfirst', component:NetmedsMembershipComponent},
  {path:'delivery', component:DeliveryAddressComponent},
  {path:'mypriscription', component:MyprisciptionComponent},
  {path:'mysubscription', component:MySubscriptionComponent},
  {path:'referandearns', component:ReferandEarnsComponent},
  {path:'rateus', component:RateUsComponent},
  {path:'paymentmethods', component:PaymentMethodsComponent},
  {path:'medicineorder', component:MedicineOrdersComponent},
  {path:'myrewards', component:MyRewardsComponent},
  {path:'footerbar', component:FooterbarComponent},
  {path:'aboutnetmeds', component:AboutNetmedsComponent},
  {path:'customerspeak', component:CustomerSpeakComponent},
  {path:'inthenews', component:IntheNewsComponent},
  {path:'contactus', component:ContactUsComponent},
  {path:'termsandconditions', component:TermsandConditionComponent},
  {path:'privacypolicy', component:PrivacyPolicyComponent},
  {path:'fees', component:FeesandPayementPolicyComponent},
  {path:'shoppingdelivery', component:ShippingandDeliveryPolicyComponent},
  {path:'refund', component:RefundPolicyComponent},
  {path:'healtharticles', component:HealthArticlesComponent},
  {path:'faqs', component:FAQSComponent}
  
]

@NgModule({
  declarations: [
    PrescriptionComponent,
    OffersComponent,
    CartComponent,
    HomebodyComponent,
    AboutNetmedsComponent,
    CustomerSpeakComponent,
    IntheNewsComponent,
    TermsandConditionComponent,
    PrivacyPolicyComponent,
    FeesandPayementPolicyComponent,
    ShippingandDeliveryPolicyComponent,
    RefundPolicyComponent,
    HealthArticlesComponent,
    FAQSComponent,
    LoginFormComponent,
    AccountInformationComponent,
    MyWalletComponent,
    MywishlistComponent,
    NetmedsMembershipComponent,
    DeliveryAddressComponent,
    MyprisciptionComponent,
    MySubscriptionComponent,
    ReferandEarnsComponent,
    RateUsComponent,
    PaymentMethodsComponent,
    MedicineOrdersComponent,
    MyRewardsComponent,
    FooterbarComponent,
    NavbarComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class HomeModule { }
