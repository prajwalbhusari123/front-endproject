import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/Thread/service.service';

@Component({
  selector: 'app-show-emi',
  templateUrl: './show-emi.component.html',
  styleUrls: ['./show-emi.component.css']
})
export class ShowEmiComponent {


  constructor(private activeroute:ActivatedRoute, private cs:ServiceService, private fb:FormBuilder, private route:Router){}

  emiInstallmentForm:FormGroup;
  ngOnInit(){
    this.emiInstallmentForm = this.fb.group({

      installmentId:[],
      applicantFirstName:[],
      applicantLastName:[],
      loanAccountNumber:[],
      emiRecivedDate:[],
      installmentNumber:[],
      monthlyEmiAmount:[],
      nextEmiDueDate:[],
      loanTenureInYears:[],
      numberOfEmiRemaining:[],
      totalRemaningLoanAmountToBePaid:[],


    })
   this. getviewdata();
  }

  getviewdata(){
    this.activeroute.paramMap.subscribe(param=>{
      let loanId:number=parseInt(param.get("data"));
     this.getEmiApplication(loanId);
    })
  }
  getEmiApplication(ledgerid:number)
  {
    this.cs.getledgerdata(ledgerid).subscribe((data:any)=>{

    console.log(data)

    this.emiInstallmentForm.patchValue({
        
      installmentId:data.ledgerNumber,
      applicantFirstName:data.ledgerFname,
      applicantLastName:data.ledgerLname,
      loanAccountNumber:data.loanApplicationNumber,
      monthlyEmiAmount:data.monthlyemi,
      loanTenureInYears:data.tenure*12,
    })
  });
  }
  onClickExit()
{
  this.route.navigate(['dash'])

}


onSubmitForm()
{

this.cs.saveinstallment(this.emiInstallmentForm.value).subscribe();

alert('Installment Recived Ledger Updated')

this.route.navigate(['dash'])




}

}
