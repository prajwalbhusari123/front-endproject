import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SanctionLetter } from 'src/app/Model/sanction-letter';
import { ServiceService } from 'src/app/Thread/service.service';

@Component({
  selector: 'app-check-verified-appl',
  templateUrl: './check-verified-appl.component.html',
  styleUrls: ['./check-verified-appl.component.css']
})
export class CheckVerifiedApplComponent {

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


      gensanLetter(reg:any){
        this.router.navigateByUrl("/dash/cm/santionletter/"+reg.applicantId);
      }

      gensanLetterpdf(reg:number)
      {
        this.router.navigateByUrl("/dash/cm/sanctiondata/"+reg)
      }

      
}
