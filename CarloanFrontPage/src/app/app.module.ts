import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmiCalComponent } from './emi-cal/emi-cal.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EnquiryPageComponent } from './enquiry-page/enquiry-page.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { HomeCommpComponent } from './home-commp/home-commp.component';
import { HomePageHeaderComponent } from './home-page-header/home-page-header.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './Entry/dashboard/dashboard.component';
import { HeaderComponent } from './Entry/Include/header/header.component';
import { FooterComponent } from './Entry/Include/footer/footer.component';
import { SideMenuComponent } from './Entry/Include/side-menu/side-menu.component';
import { RemouduleModule } from './Module/remoudule/remoudule.module';
import Swal from  'sweetalert2';


@NgModule({
  declarations: [
    AppComponent,
    EmiCalComponent,
    EnquiryPageComponent,
    HomeCommpComponent,
    HomePageHeaderComponent,
    LoginPageComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SideMenuComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RemouduleModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule

  ],
  exports:[
    EmiCalComponent,
    EnquiryPageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

