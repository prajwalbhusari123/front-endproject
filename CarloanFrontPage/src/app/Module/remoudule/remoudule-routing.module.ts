import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckregisterComponent } from '../oemoudule/checkregister/checkregister.component';
import { ViewDetailPopComponent } from './BackFile/view-detail-pop/view-detail-pop.component';
import { CheckEnquiryComponent } from './check-enquiry/check-enquiry.component';
import { EnqApproveComponent } from './enq-approve/enq-approve.component';
import { EnqRejectComponent } from './enq-reject/enq-reject.component';
import { RegisterComponent } from './register/register.component';
import { SactionApplicationComponent } from './saction-application/saction-application.component';
import { ViewRegisterDataComponent } from './view-register-data/view-register-data.component';

const routes: Routes = [

  {path:'checkenquiry' , component:CheckEnquiryComponent},
  {path:'registerhere', component:RegisterComponent},
  {path:'viewreg', component:ViewRegisterDataComponent},
  {path:'viewalldata',component:ViewDetailPopComponent},
  {path:'viewalldata/:data' ,component:ViewDetailPopComponent},
  {path:'approve', component:EnqApproveComponent},
  {path:'reject', component:EnqRejectComponent},
  {path:'sanctionApprovebycm', component:SactionApplicationComponent}
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemouduleRoutingModule { }
