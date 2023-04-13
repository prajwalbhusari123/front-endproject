import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/Thread/service.service';

@Component({
  selector: 'app-emi-list',
  templateUrl: './emi-list.component.html',
  styleUrls: ['./emi-list.component.css']
})
export class EmiListComponent {


emilist:any;
constructor(private cs:ServiceService, private router:Router){}

ngOnInit(){

  this.getemisdata()
}

getemisdata(){
this.cs.getemidata().subscribe((data:any)=>{
  
  this.emilist=data;
})
}


showemi(emi){
    this.router.navigate(['/dash/ah/showemi/'+emi.ledgerNumber]);
  }
  onClickBOunce(emi:any)
  {

    this.cs.defaulterCountupdateLedger(emi).subscribe();

    alert("EMI Skiped Recorded")

    this.router.navigate(['dash']);

  }
  
}
