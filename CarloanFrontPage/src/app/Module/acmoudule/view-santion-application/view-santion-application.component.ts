import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Thread/service.service';

@Component({
  selector: 'app-view-santion-application',
  templateUrl: './view-santion-application.component.html',
  styleUrls: ['./view-santion-application.component.css']
})
export class ViewSantionApplicationComponent {
  sanctiondata:any[];
  status="SanctionLetterSent"
  constructor(private cs:ServiceService, private router:Router){}

  ngOnInit(){
    this.cs.getSanctionData(this.status).subscribe((data:any[])=>{
      this.sanctiondata=data;
    })
  }

  movetoLedger(reg){
  this.router.navigate(['/dash/ah/ledgergenrate/'+reg.sid])
  }


  LoanDisbure(loandata){
    this.router.navigate(['/dash/ah/loandisbure/'+loandata.sid])
    
  }

  // opendatainpop(reg:any){
  //   this.router.navigate(['viewalldata/'+reg.applicantId])
  //     }

}
