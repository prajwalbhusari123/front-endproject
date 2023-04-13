import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Thread/service.service';

@Component({
  selector: 'app-checkregister',
  templateUrl: './checkregister.component.html',
  styleUrls: ['./checkregister.component.css']
})
export class CheckregisterComponent {

  constructor(private cs:ServiceService, private router:Router){}
  registerdData:any[];
  status:any="WaitingforApproval";

  ngOnInit(){
    this.getRegData();
  }

  getRegData(){

    this.cs.getwaitingforapprovaldata(this.status).subscribe((data:any[])=>
    {
      this.registerdData=data;
      console.log(this.getRegData);
    })
  }


  opendatainpop(reg:any){
this.router.navigate(['viewalldata/'+reg.applicantId])
  }

  reject(applicantreject:any){
    alert("Reject Application")
    this.cs.rejectedbyoe(applicantreject).subscribe();
    window.location.reload();
  }

//firstly verify data and send to the Credit Manager
  verifyalldata(reg){
    this.cs.verifiedbyoe(reg).subscribe();
    window.location.reload();
  }

 

}
