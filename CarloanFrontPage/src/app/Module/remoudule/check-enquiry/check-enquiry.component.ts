import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Enquiry } from 'src/app/Model/enquiry';
import { ServiceService } from 'src/app/Thread/service.service';

@Component({
  selector: 'app-check-enquiry',
  templateUrl: './check-enquiry.component.html',
  styleUrls: ['./check-enquiry.component.css']
})
export class CheckEnquiryComponent {

  constructor(private cs:ServiceService, private router:Router){}
  pr:Enquiry[];
  
  ngOnInit(){
    
    this.cs.getData().subscribe((p:Enquiry[])=>
    {
      console.log(p)
      this.pr=p;
    })
    
}

checkCIBIL(enquiry:any){
  // enquiry.enquiryCibilStatus="Under Cibil Check"
 this.cs.underCheckcibil(enquiry).subscribe();
 window.location.reload();
    }



    deletEnquiry(enquriy){
      this.cs.deleteEnquiry(enquriy.enquiryId).subscribe();
      window.location.reload();
    }


}
