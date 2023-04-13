import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/Thread/service.service';

@Component({
  selector: 'app-loan-disburement',
  templateUrl: './loan-disburement.component.html',
  styleUrls: ['./loan-disburement.component.css']
})
export class LoanDisburementComponent {

  step:any=1;
  LoanDisbursement:FormGroup;
  sanctiondata:any;
  constructor(private fb:FormBuilder, private cs:ServiceService, private activeroute:ActivatedRoute, private router:Router){}

  ngOnInit(){
    this.LoanDisbursement=this.fb.group({
    loanId:[],
  	loanAccountNumber:[],
	  loanApplicantFname:[],
	  loanApplicantLname:[],
	  applicantPanNumber:[],
	  totalSanctionLoanAmount:[],
    totalDisbursementAmount:[],
    loanDisbursementStatus:[],
	  carDealerDetails:this.fb.group({
      cardealerid:[],
      dealerName:[],
      dealerAddress:[],
      dealerEmail:[],
      dealerMobileNumber:[],
        dealerAccountDetails:this.fb.group({
          did:[],
          dealerAccHolderName:[],
          dealerAccBankName:[],
          dealerAccountNumber:[],
          dealerBranchName:[],
          dealerBankIFSCCode:[],
        })
    })
    })
    this.getviewdata();
  }
  getviewdata(){
    this.activeroute.paramMap.subscribe(param=>{
      let sid:number=parseInt(param.get("data"));
      console.log(sid);
     this.getSanctionApplicantData(sid);
    })
  }

  getSanctionApplicantData(sid:number){
    this.cs.getScatiobleterbyid(sid).subscribe((data:any)=>{
    console.log(data);
    this.sanctiondata=data;
    this.LoanDisbursement.patchValue({
      loanAccountNumber:data.loanApplicatioNumber,
      loanApplicantFname:data.applicantFname,
      loanApplicantLname:data.applicantLname,
      applicantPanNumber:data.applicationPanno,
      totalSanctionLoanAmount:data.loanAmountSanctioned,
    })
  });
  }  

  disburse(){
    this.cs.saveDisbusre(this.LoanDisbursement.value).subscribe();
    this.cs.loandisbursestatusinsactionletter(this.sanctiondata).subscribe();
    window.location.reload();
  }

  next(){
    this.step=this.step+1;
  }
  previous(){
    this.step=this.step-1;
  }
}
