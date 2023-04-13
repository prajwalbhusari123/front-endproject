import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckVerifiedApplComponent } from './check-verified-appl/check-verified-appl.component';
import { SanctionLetterComponent } from './sanction-letter/sanction-letter.component';
import { ViewdatainPdfComponent } from './viewdatain-pdf/viewdatain-pdf.component';

const routes: Routes = [
  {path:'checkverifiedapplication', component:CheckVerifiedApplComponent},
  {path:'santionletter/:data', component:SanctionLetterComponent},
  {path:'sanctiondata/:sid',component:ViewdatainPdfComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmmouduleRoutingModule { }
