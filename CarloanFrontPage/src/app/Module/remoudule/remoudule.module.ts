import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemouduleRoutingModule } from './remoudule-routing.module';
import { CheckEnquiryComponent } from './check-enquiry/check-enquiry.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper'
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { RegisterComponent } from './register/register.component';
import { ViewRegisterDataComponent } from './view-register-data/view-register-data.component';
import { ViewDetailPopComponent } from './BackFile/view-detail-pop/view-detail-pop.component';
import { EnqApproveComponent } from './enq-approve/enq-approve.component';
import { EnqRejectComponent } from './enq-reject/enq-reject.component';
import { SactionApplicationComponent } from './saction-application/saction-application.component';


@NgModule({
  declarations: [
    CheckEnquiryComponent,
    RegisterComponent,
    ViewRegisterDataComponent,
    ViewDetailPopComponent,
    EnqApproveComponent,
    EnqRejectComponent,
    SactionApplicationComponent
  ],
  imports: [
    CommonModule,
    RemouduleRoutingModule,
    ReactiveFormsModule,
   MatFormFieldModule ,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatStepperModule
  ]
})
export class RemouduleModule { }
