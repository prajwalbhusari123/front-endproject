import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OemouduleRoutingModule } from './oemoudule-routing.module';
import { CheckCibilComponent } from './check-cibil/check-cibil.component';
import { CheckregisterComponent } from './checkregister/checkregister.component';
import { VerifiedApplicationComponent } from './verified-application/verified-application.component';
import { RejectApplicationComponent } from './reject-application/reject-application.component';


@NgModule({
  declarations: [
    CheckCibilComponent,
    CheckregisterComponent,
    VerifiedApplicationComponent,
    RejectApplicationComponent
  ],
  imports: [
    CommonModule,
    OemouduleRoutingModule
  ]
})
export class OemouduleModule { }
