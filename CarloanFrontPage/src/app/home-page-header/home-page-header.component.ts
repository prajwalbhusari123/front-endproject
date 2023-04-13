import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EnquiryPageComponent } from '../enquiry-page/enquiry-page.component';
import { LoginPageComponent } from '../login-page/login-page.component';

@Component({
  selector: 'app-home-page-header',
  templateUrl: './home-page-header.component.html',
  styleUrls: ['./home-page-header.component.css']
})
export class HomePageHeaderComponent {
  constructor(private router:Router, private dialogeref:MatDialog){}

  opendialoge(){
    this.dialogeref.open(EnquiryPageComponent);
  }

  navToLoginPage(){
    this.router.navigateByUrl("/login")
  }

  openlogin(){
    this.dialogeref.open(LoginPageComponent);
  }


}
