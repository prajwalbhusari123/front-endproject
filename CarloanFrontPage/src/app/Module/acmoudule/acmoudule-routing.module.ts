import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmiListComponent } from './emi-list/emi-list.component';
import { LoanDisbureApplicationComponent } from './loan-disbure-application/loan-disbure-application.component';
import { LoanDisburementComponent } from './loan-disburement/loan-disburement.component';
import { LoanSetteledComponent } from './loan-setteled/loan-setteled.component';
import { ShowEmiComponent } from './show-emi/show-emi.component';
import { ViewDefaulterComponent } from './view-defaulter/view-defaulter.component';
import { ViewInstallmentComponent } from './view-installment/view-installment.component';
import { ViewLedgerComponent } from './view-ledger/view-ledger.component';
import { ViewSantionApplicationComponent } from './view-santion-application/view-santion-application.component';

const routes: Routes = [
  {path:'sanctiondata' , component:ViewSantionApplicationComponent},
  {path:'loandisbure',component:LoanDisburementComponent},
  {path:'loandisbure/:data',component:LoanDisburementComponent},
  {path:'getLoanDisbursedata',component:LoanDisbureApplicationComponent},
  {path:'emilist', component:EmiListComponent},
  {path:'emilist/:data', component:EmiListComponent},
  {path:'viewledger', component:ViewLedgerComponent},
  {path:'viewledger/:data', component:ViewLedgerComponent},
  {path:'showemi/:data',component:ShowEmiComponent},
  {path:'showemi',component:ShowEmiComponent},
  {
    path:'viewinstallment',component:ViewInstallmentComponent
  },
  {path:'defaulterdata',component:ViewDefaulterComponent},
  {path:'loanpaid',component:LoanSetteledComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcmouduleRoutingModule { }
