import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Thread/service.service';

@Component({
  selector: 'app-enq-approve',
  templateUrl: './enq-approve.component.html',
  styleUrls: ['./enq-approve.component.css']
})
export class EnqApproveComponent {

  mail:any;
  approvedata:any[];
status:any="Approved"
  constructor(private cs:ServiceService, private router:Router){}
ngOnInit(){
  this.cs.getApprovedbyOE(this.status).subscribe((data:any[])=>
  {
    this.approvedata=data;
    console.log(this.approvedata);
  })

}
  register(){
this.router.navigateByUrl("/dash/re/registerhere")
  }

  sendapproveEmail(enquiry){
    this.cs.approvalmail(enquiry).subscribe((data:any)=>{
      this.mail=data;
      console.log(data);
    });
    alert("Approval Mail Sent Succesfully");
  }



}
