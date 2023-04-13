import { Component } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EnquiryPageComponent } from '../enquiry-page/enquiry-page.component';

@Component({
  selector: 'app-home-commp',
  templateUrl: './home-commp.component.html',
  styleUrls: ['./home-commp.component.css']
})
export class HomeCommpComponent {

  title: any;

constructor(private dialogeref:MatDialog){}

opendialoge(){
  this.dialogeref.open(EnquiryPageComponent);
}
}
