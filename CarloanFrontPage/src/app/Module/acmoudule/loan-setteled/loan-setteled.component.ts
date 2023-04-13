import { Component } from '@angular/core';
import { ServiceService } from 'src/app/Thread/service.service';

@Component({
  selector: 'app-loan-setteled',
  templateUrl: './loan-setteled.component.html',
  styleUrls: ['./loan-setteled.component.css']
})
export class LoanSetteledComponent  {
  
  constructor(private cs:ServiceService){}
  setteledlist:any[];
  ngOnInit():void{
  
  this.cs.getLoansetteled().subscribe((data:any[])=>{
    
    this.setteledlist=data;
  })
  }


}
