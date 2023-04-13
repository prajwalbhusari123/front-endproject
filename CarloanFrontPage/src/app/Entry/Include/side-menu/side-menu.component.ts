import { Component } from '@angular/core';
import { Menus } from 'src/app/Model/menus';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

constructor(){}

usertype:string;

menus:Array<any>;

viewUser:string;

  ngOnInit():void{
this.usertype=localStorage.getItem('userType');

if(this.usertype== 're')
{
  this.viewUser="Relationship Executive"
}
else if(this.usertype== 'oe')
{
  this.viewUser = "Operational Executive"
}
else if(this.usertype == 'cm')
{
  this.viewUser = "Credit Manager"
}
else if(this.usertype == 'ah')
{
  this.viewUser = "Account Head"
}

this.menus=Menus.menus;
  }
}
