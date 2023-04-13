import { Component } from '@angular/core';
import { ServiceService } from 'src/app/Thread/service.service';

@Component({
  selector: 'app-saction-application',
  templateUrl: './saction-application.component.html',
  styleUrls: ['./saction-application.component.css']
})
export class SactionApplicationComponent {

  sanctiondata:any[];
  status="SantionLetterGenrated"
  constructor(private cs:ServiceService){}

  ngOnInit(){
    this.cs.getSanctionData(this.status).subscribe((data:any[])=>{
      this.sanctiondata=data;
    })
  }

  sendsanctionmail(sanctiondata){
    alert("Sanction Mail Successfully...")
    this.cs.sendsanctionmail(sanctiondata).subscribe();
    this.cs.sanctionstatuschange(sanctiondata).subscribe();
    window.location.reload();
  }

  genrateSanctionpdf(reg){
    this.cs.genratepdf(reg).subscribe();
    console.log(reg.sid);
    alert("PDF Genrated");
    window.location.reload();
  }
}
