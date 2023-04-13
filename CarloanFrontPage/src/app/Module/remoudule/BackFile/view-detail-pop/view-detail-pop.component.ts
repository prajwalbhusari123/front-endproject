import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicantDetails } from 'src/app/Model/applicant-details';
import { ServiceService } from 'src/app/Thread/service.service';


@Component({
  selector: 'app-view-detail-pop',
  templateUrl: './view-detail-pop.component.html',
  styleUrls: ['./view-detail-pop.component.css']
})
export class ViewDetailPopComponent {
  constructor(private activeroute:ActivatedRoute, private cs:ServiceService){}
  applicant:any;
  singleapplicantdata:any;
 

  ngOnInit(){
   this. getviewdata();
  }
  getviewdata(){
    this.activeroute.paramMap.subscribe(param=>{
      let applicantId:number=parseInt(param.get("data"));
     this.getApplicantIddata(applicantId);
    })
  }

  getApplicantIddata(id:number){
    this.cs.getDataByApplicantId(id).subscribe((data:any)=>{
    console.log(data)
    this.singleapplicantdata=data
  });
  }   
  // getadharimg(){
  //   this.reader.readAsDataURL(this.singleapplicantdata.document.adharCard.value);
  //   this.reader.onload=a =>this.adharsrc=this.reader.result;
  // }
}