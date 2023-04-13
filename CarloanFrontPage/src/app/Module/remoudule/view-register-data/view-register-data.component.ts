import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Thread/service.service';



@Component({
  selector: 'app-view-register-data',
  templateUrl: './view-register-data.component.html',
  styleUrls: ['./view-register-data.component.css']
})
export class ViewRegisterDataComponent {
  
  constructor(private cs:ServiceService, private router:Router){}
  registerdData:any[];

  ngOnInit(){
    this.getRegData();
  }

  getRegData(){
    this.cs.getAllDataRegistedData().subscribe((data:any[])=>
    {
      this.registerdData=data;
      console.log(this.getRegData);
    })

  }

  opendatainpop(reg:any){
this.router.navigate(['viewalldata/'+reg.applicantId])
  }

  reject(applicantId:any){
    alert("Data Delete Succesfully")
    this.cs.deleteByApplicantId(applicantId).subscribe();
    window.location.reload();
  }

  forward(reg:any){
    this.cs.updadtestatus(reg).subscribe();
    window.location.reload();
    
   }

}
