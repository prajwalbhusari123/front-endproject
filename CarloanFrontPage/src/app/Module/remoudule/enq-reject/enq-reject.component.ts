import { Component } from '@angular/core';
import { ServiceService } from 'src/app/Thread/service.service';

@Component({
  selector: 'app-enq-reject',
  templateUrl: './enq-reject.component.html',
  styleUrls: ['./enq-reject.component.css']
})
export class EnqRejectComponent {
  mail:any;
  rejectdata:any[];
  status:any="Rejected"
    constructor(private cs:ServiceService){}
  ngOnInit(){
    this.cs.getApprovedbyOE(this.status).subscribe((data:any[])=>
    {
      this.rejectdata=data;
      console.log(this.rejectdata);
    })
  }

  sendrejectEmail(enquiry){
    this.cs.rejectmail(enquiry).subscribe((data:any)=>{
      this.mail=data;
      console.log(data);
    });
    alert("Reject Mail Sent Succesfully");
  }
}
