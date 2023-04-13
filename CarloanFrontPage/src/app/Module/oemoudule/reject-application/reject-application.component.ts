import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Thread/service.service';

@Component({
  selector: 'app-reject-application',
  templateUrl: './reject-application.component.html',
  styleUrls: ['./reject-application.component.css']
})
export class RejectApplicationComponent {


  rejectbyoe:any[];
  status:any="ApplicationReject"
    constructor(private cs:ServiceService, private router:Router){}
  ngOnInit(){

    this.cs.VerifiedByOE(this.status).subscribe((data:any[])=>
    {
      this.rejectbyoe=data;
      console.log(this.rejectbyoe);
    })
  }

  opendatainpop(reg:any){
    this.router.navigate(['viewalldata/'+reg.applicantId])
      }
}
