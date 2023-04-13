import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/Thread/service.service';

@Component({
  selector: 'app-view-ledger',
  templateUrl: './view-ledger.component.html',
  styleUrls: ['./view-ledger.component.css']
})
export class ViewLedgerComponent {
  Ledgerimfo:FormGroup;

  constructor(private fb:FormBuilder, private activeroute:ActivatedRoute, private cs:ServiceService,private route:Router){}

  ngOnInit(){
    this.Ledgerimfo = this.fb.group({
       ledgerNumber:[],
       loanApplicationNumber:[],
       ledgerFname:[],
       ledgerLname:[],
       ledgerLoanAmount:[],
       loanStatus:[],
       totalPaywithInterest:[],
       tenure:[],
       monthlyemi:[],
       defaulterCount:[],
      


    })
   this. getviewdata();
  }

  getviewdata(){
    this.activeroute.paramMap.subscribe(param=>{
      let loanId:number=parseInt(param.get("data"));
     this.getEmiApplication(loanId);
    })
  }
  getEmiApplication(loanId:number){
    this.cs.getDataByApplicantId(loanId).subscribe((data:any)=>{


    this.Ledgerimfo.patchValue({
      ledgerNumber:data.applicantId,
      
      loanApplicationNumber:data.sanctionLetter.loanApplicatioNumber,
      ledgerFname:data.sanctionLetter.applicantFname,
      ledgerLname:data.sanctionLetter.applicantLname,
      ledgerLoanAmount:data.sanctionLetter.loanAmountSanctioned,
      
      totalPaywithInterest:data.sanctionLetter.monthlyEmiAmount*(data.sanctionLetter.loanTenure*12),
      tenure:data.sanctionLetter.loanTenure,
      monthlyemi:data.sanctionLetter.monthlyEmiAmount,

      
    })
  });
  }



  onsubmitledgerform()
  {

    this.cs.saveledgerdata(this.Ledgerimfo.value).subscribe();

    this.route.navigate(['dash'])
  }

  onClickExit()
  {
    this.route.navigate(['dash'])
  }


}
