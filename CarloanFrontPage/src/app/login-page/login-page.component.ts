import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {



  email:any;
  password:any;

  loginform:FormGroup

  constructor(public r:Router, private fb:FormBuilder){}

  ngOnInit(){
    this.loginform=this.fb.group({
      username:[],
      password:[]
    })
  }

    submitt(){
      console.log(this.loginform.controls['username'].value)
      console.log(this.loginform.controls['password'].value)
      if(this.loginform.controls['username'].value=='re' && this.loginform.controls['password'].value=='re')
      {
        alert("RE LOGIN");
        localStorage.setItem('userType','re');
        this.r.navigateByUrl("/dash")
        
      }
      
      if(this.loginform.controls['username'].value=='oe' && this.loginform.controls['password'].value=='oe')
      {
        alert("OE LOGIN");
        localStorage.setItem('userType','oe');
        this.r.navigateByUrl("/dash")
     
      }

      if(this.loginform.controls['username'].value=='cm' && this.loginform.controls['password'].value=='cm')
      {
        alert("CM LOGIN");
        localStorage.setItem('userType','cm');
        this.r.navigateByUrl("/dash")
     
      }

      if(this.loginform.controls['username'].value=='ah' && this.loginform.controls['password'].value=='ah')
      {
        alert("AH LOGIN");
        localStorage.setItem('userType','ah');
        this.r.navigateByUrl("/dash")
  
      }
    }



}
