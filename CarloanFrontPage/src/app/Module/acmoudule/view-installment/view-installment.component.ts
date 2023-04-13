import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ServiceService } from 'src/app/Thread/service.service';

@Component({
  selector: 'app-view-installment',
  templateUrl: './view-installment.component.html',
  styleUrls: ['./view-installment.component.css']
})
export class ViewInstallmentComponent{

  constructor(private cs:ServiceService,private route:Router){}

  installmentDetails:any[];

ngOnInit()
{

this.cs.getAllDataRegistedData().subscribe((ins:any[])=>{

  this.installmentDetails=ins;

})

}

}

