import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AcmouduleRoutingModule } from './acmoudule-routing.module';
import { ViewSantionApplicationComponent } from './view-santion-application/view-santion-application.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { LoanDisburementComponent } from './loan-disburement/loan-disburement.component';
import { LoanDisbureApplicationComponent } from './loan-disbure-application/loan-disbure-application.component';
import { EmiListComponent } from './emi-list/emi-list.component';
import { ViewLedgerComponent } from './view-ledger/view-ledger.component';
import { ShowEmiComponent } from './show-emi/show-emi.component';
import { ViewInstallmentComponent } from './view-installment/view-installment.component';
import { ViewDefaulterComponent } from './view-defaulter/view-defaulter.component';
import { LoanSetteledComponent } from './loan-setteled/loan-setteled.component';


@NgModule({
  declarations: [
    ViewSantionApplicationComponent,
    LoanDisburementComponent,
    LoanDisbureApplicationComponent,
    EmiListComponent,
    ViewLedgerComponent,
    ShowEmiComponent,
    ViewInstallmentComponent,
    ViewDefaulterComponent,
    LoanSetteledComponent
  ],
  imports: [
    CommonModule,
    AcmouduleRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class AcmouduleModule { }
