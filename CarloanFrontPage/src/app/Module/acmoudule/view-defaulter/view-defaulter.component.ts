import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Thread/service.service';

@Component({
  selector: 'app-view-defaulter',
  templateUrl: './view-defaulter.component.html',
  styleUrls: ['./view-defaulter.component.css']
})
export class ViewDefaulterComponent implements OnInit{
  
  constructor(private cs:ServiceService){}
  defaulterlist:any[];
  ngOnInit():void{
  
  this.cs.getDefaulterdata().subscribe((data:any[])=>{
    
    this.defaulterlist=data;
  })
  }



}
