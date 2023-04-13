import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Thread/service.service';

@Component({
  selector: 'app-loan-disbure-application',
  templateUrl: './loan-disbure-application.component.html',
  styleUrls: ['./loan-disbure-application.component.css']
})
export class LoanDisbureApplicationComponent {
  loanDisbursedata:any[];
  constructor(private cs:ServiceService, private router:Router){}

  ngOnInit(){
    this.cs.getloanDisbursedata().subscribe((data:any)=>{
      this.loanDisbursedata=data;
      console.log(data);
    })
  }

  

  genrateLedger(ld){
    this.router.navigate(['/dash/ah/viewledger/'+ld.loanId])
  }
}
