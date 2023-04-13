import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckCibilComponent } from './check-cibil/check-cibil.component';
import { CheckregisterComponent } from './checkregister/checkregister.component';
import { RejectApplicationComponent } from './reject-application/reject-application.component';
import { VerifiedApplicationComponent } from './verified-application/verified-application.component';

const routes: Routes = [
  {path:'checkcibil', component:CheckCibilComponent},
  {path:'viewregdata', component:CheckregisterComponent},
  {path:'verifiedapplication', component:VerifiedApplicationComponent},
  {path:'rejectapplication', component:RejectApplicationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OemouduleRoutingModule { }
