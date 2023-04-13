import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Thread/service.service';

@Component({
  selector: 'app-sanction-letter',
  templateUrl: './sanction-letter.component.html',
  styleUrls: ['./sanction-letter.component.css']
})
export class SanctionLetterComponent {
  genSanLetter:FormGroup;
  monthlyEmiAmount:any;


  constructor(private cs:ServiceService, private activeroute:ActivatedRoute, private fb:FormBuilder){}
  ngOnInit(){
     this.genSanLetter=this.fb.group({
      sid:[],
      sanctionDate:[],
      loanApplicatioNumber:[],
      applicantFname:[],
      applicantLname:[],
      applicantEmailId:[],
      applicantMobNumber:[],
      applicationPanno:[],
      applicantLoanAmount:[],
      loanAmountSanctioned:[],
      rateOfInterest:[],
      loanTenure:[],
      monthlyEmiAmount:[],
      modeOfPayment:[],
      remark:[],
      status:[]
     })

     this. getviewdata();
    }


    getviewdata(){
      this.activeroute.paramMap.subscribe(param=>{
        let applicantId:number=parseInt(param.get("data"));
       console.log(applicantId);
       this.getApplicantIddata(applicantId);
      });
    }

    getApplicantIddata(id:number){
       this.cs.getDataByApplicantId(id).subscribe((data:any)=>{
console.log(data);
        this.genSanLetter.patchValue({
          sid:data.applicantId,
          applicantFname:data.applicantFname,
          applicantLname:data.applicantLname,
          applicantEmailId:data.applicantEmailId,
          applicantMobNumber:data.applicantMobNumber,
          applicationPanno:data.applicationPanno,
          applicantLoanAmount:data.applicantLoanAmount
        })
       });
       }

       saveSanGenDetails(){
      this.cs.savescantionLetter(this.genSanLetter.value).subscribe();
      window.location.reload();
       }

  checkemi(){
var loanAmountSanctioned=this.genSanLetter.controls['loanAmountSanctioned'].value;
var loanTenure:number=this.genSanLetter.controls['loanTenure'].value;
var rateOfInterest:number=this.genSanLetter.controls['rateOfInterest'].value;
var outstandingAmount:any;
  outstandingAmount =
       Number(loanAmountSanctioned) +
       Number(loanAmountSanctioned * (rateOfInterest / 100));
       this.genSanLetter.patchValue({
        monthlyEmiAmount:  outstandingAmount / (loanTenure*(12))
       }) 
  }
}
