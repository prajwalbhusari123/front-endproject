import { Component,ViewChild,ElementRef } from '@angular/core';
import { SanctionLetter } from 'src/app/Model/sanction-letter';
import { ServiceService } from 'src/app/Thread/service.service';
import { SanctionLetterComponent } from '../sanction-letter/sanction-letter.component';
import {jsPDF} from "jspdf";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewdatain-pdf',
  templateUrl: './viewdatain-pdf.component.html',
  styleUrls: ['./viewdatain-pdf.component.css']
})
export class ViewdatainPdfComponent {

  sanctiondata:SanctionLetter;
  
  sanctionletter:any;
 constructor(private cs:ServiceService,private activatedr:ActivatedRoute){}

   ngOnInit(){
   
    this.activatedr.paramMap.subscribe(param=>{

      let abc:number=parseInt(param.get('sid'));
      this.cs.getScatiobleterbyid(abc).subscribe((data)=>{
               this.sanctionletter=data;
      });
    })
   }



  
   @ViewChild('content', {static:false}) el!:ElementRef;
       makepdf()
       {
         
         let pdf=new jsPDF('p','pt','a4');
         pdf.html(this.el.nativeElement,{
           callback: (pdf)=> {
             pdf.save('demo.pdf') }})
     }





    }
  

  


