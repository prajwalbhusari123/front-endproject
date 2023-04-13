import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EnquiryPageComponent } from 'src/app/enquiry-page/enquiry-page.component';
import { LoginPageComponent } from 'src/app/login-page/login-page.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router:Router){}


  logout(){
    this.router.navigateByUrl("/home")
    
  }
}
