import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomebodyComponent } from './Lazyloading/home/homebody/homebody.component';
import { WellnessHomeComponent } from './Lazyloading/Wellness/wellness-home/wellness-home.component';
import { BeautyComponent } from './Lazyloading/Beauty/beauty/beauty.component';

const routes: Routes = [
  {path:"", component: HomebodyComponent},
  {path:'wellness', component:WellnessHomeComponent},
  {path:'beauty', component:BeautyComponent},
  {path:'home', loadChildren:()=>import('./Lazyloading/home/home.module').then(mod=>mod.HomeModule)},
  {path:'medicine', loadChildren:()=>import('./Lazyloading/medicine/medicine.module').then(mod=>mod.MedicineModule)},
  {path:'ayush', loadChildren:()=>import('./Lazyloading/Wellness/ayush/ayush.module').then(mod=>mod.AyushModule)},
  {path:'covid', loadChildren:()=>import('./Lazyloading/Wellness/covidessential/covidessential.module').then(mod=>mod.CovidessentialModule)},
  {path:'devices', loadChildren:()=>import('./Lazyloading/Wellness/devices/devices.module').then(mod=>mod.DevicesModule)},
  {path:'diabetes', loadChildren:()=>import('./Lazyloading/Wellness/diabetes-support/diabetes-support.module').then(mod=>mod.DiabetesSupportModule)},
  {path:'eyewear', loadChildren:()=>import('./Lazyloading/Wellness/eyewear/eyewear.module').then(mod=>mod.EyewearModule)},
  {path:'fitness', loadChildren:()=>import('./Lazyloading/Wellness/fitness/fitness.module').then(mod=>mod.FitnessModule)},
  {path:'healthconditions', loadChildren:()=>import('./Lazyloading/Wellness/health-conditions/health-conditions.module').then(mod=>mod.HealthConditionsModule)},
  {path:'mombaby', loadChildren:()=>import('./Lazyloading/Wellness/momand-baby/momand-baby.module').then(mod=>mod.MomandBabyModule)},
  {path:'personalcare', loadChildren:()=>import('./Lazyloading/Wellness/personal-care/personal-care.module').then(mod=>mod.PersonalCareModule)},
  {path:'sexsualwellness', loadChildren:()=>import('./Lazyloading/Wellness/sexualwellness/sexualwellness.module').then(mod=>mod.SexualwellnessModule)},
  {path:'surgical', loadChildren:()=>import('./Lazyloading/Wellness/surgical/surgical.module').then(mod=>mod.SurgicalModule)},
  {path:'veterinary', loadChildren:()=>import('./Lazyloading/Wellness/veterinary/veterinary.module').then(mod=>mod.VeterinaryModule)},
  {path:'store', loadChildren:()=>import('./Lazyloading/Wellness/stores/stores.module').then(mod=>mod.StoresModule)},
  {path:'trending', loadChildren:()=>import('./Lazyloading/Wellness/trending/trending.module').then(mod=>mod.TrendingModule)},
  {path:'labtest', loadChildren:()=>import('./Lazyloading/labtest/labtest.module').then(mod=>mod.LabtestModule)},
  {path:'fragrences', loadChildren:()=>import('./Lazyloading/Beauty/fragrences/fragrences.module').then(mod=>mod.FragrencesModule)},
  {path:'hair', loadChildren:()=>import('./Lazyloading/Beauty/hair/hair.module').then(mod=>mod.HairModule)},
  {path:'makeup', loadChildren:()=>import('./Lazyloading/Beauty/makeup/makeup.module').then(mod=>mod.MakeupModule)},
  {path:'mensgrooming', loadChildren:()=>import('./Lazyloading/Beauty/mens-grooming/mens-grooming.module').then(mod=>mod.MensGroomingModule)},
  {path:'skincare', loadChildren:()=>import('./Lazyloading/Beauty/skin-care/skin-care.module').then(mod=>mod.SkinCareModule)},
  {path:'toolsapp', loadChildren:()=>import('./Lazyloading/Beauty/toolsand-apliences/toolsand-apliences.module').then(mod=>mod.ToolsandApliencesModule)},
  {path:'healthcorner', loadChildren:()=>import('./Lazyloading/health-corner/health-corner.module').then(mod=>mod.HealthCornerModule)},
  
  
  
  
  
  {path:'**', redirectTo:''}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
