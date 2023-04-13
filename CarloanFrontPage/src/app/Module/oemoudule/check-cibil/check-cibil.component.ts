import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enquiry } from 'src/app/Model/enquiry';
import { ServiceService } from 'src/app/Thread/service.service';

@Component({
  selector: 'app-check-cibil',
  templateUrl: './check-cibil.component.html',
  styleUrls: ['./check-cibil.component.css']
})
export class CheckCibilComponent {

constructor(private activeroute:ActivatedRoute, private cs:ServiceService,private router:Router){}

pr:any[];
CibilScore:any;
  
ngOnInit(){
  this.cs.getCibil().subscribe((d:Enquiry[])=>{
    this.pr=d;
    console.log(d);
  });
  
  
 
// this.getCibil()
}

// getdataofenquiry(enquiryId:any)
// {
//   this.cs.getenquiryId(enquiryId).subscribe((p:Enquiry[])=>
//   {

//     console.log(p)
//     this.pr=p;
//   })

checkcibil(enquiry:any){
  console.log(enquiry);
  this.cs.getCibilScoreById(enquiry).subscribe((m:Enquiry)=>{
    this.CibilScore=m;
    console.log(m);
  });
  window.location.reload();
  }


  cibilApprove(enquiry:any){

    console.log(enquiry);
    this.cs.cibilApprove(enquiry).subscribe();
    window.location.reload();
  }


  cibilReject(enquiry:any){
    console.log(enquiry);
    this.cs.cibilReject(enquiry).subscribe();
    window.location.reload();

  }

}
