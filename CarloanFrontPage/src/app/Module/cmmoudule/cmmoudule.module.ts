import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmmouduleRoutingModule } from './cmmoudule-routing.module';
import { CheckVerifiedApplComponent } from './check-verified-appl/check-verified-appl.component';
import { SanctionLetterComponent } from './sanction-letter/sanction-letter.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { ViewdatainPdfComponent } from './viewdatain-pdf/viewdatain-pdf.component';

@NgModule({
  declarations: [
    CheckVerifiedApplComponent,
    SanctionLetterComponent,
    ViewdatainPdfComponent
  ],
  imports: [
    CommonModule,
    CmmouduleRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    
  ]
})
export class CmmouduleModule { }
