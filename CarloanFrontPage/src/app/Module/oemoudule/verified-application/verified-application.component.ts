import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Thread/service.service';

@Component({
  selector: 'app-verified-application',
  templateUrl: './verified-application.component.html',
  styleUrls: ['./verified-application.component.css']
})
export class VerifiedApplicationComponent {

  verifiedbyoe:any[];
  status:any="ApplicationVerified"
    constructor(private cs:ServiceService, private router:Router){}
  ngOnInit(){

    this.cs.VerifiedByOE(this.status).subscribe((data:any[])=>
    {
      this.verifiedbyoe=data;
      console.log(this.verifiedbyoe);
    })
  }

  opendatainpop(reg:any){
    this.router.navigate(['viewalldata/'+reg.applicantId])
      }


      
}


