import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { ServiceService } from '../Thread/service.service';

@Component({
  selector: 'app-enquiry-page',
  templateUrl: './enquiry-page.component.html',
  styleUrls: ['./enquiry-page.component.css']
})
export class EnquiryPageComponent {

  constructor(private fb:FormBuilder,private ss:ServiceService) { }

  productForm:FormGroup;
  ngOnInit(): void {
     this.productForm=this.fb.group({
    enquiryId:[],
    enquiryFname:[],
    enquiryLname:[],
    enquiryMobnumber:[],
    enquiryEmailid:[],
    enquiryLoanAmount:[],
    enquiryLoantenure:[],
    enquiryPanno:[],
    enquiryCreationtime:[],
    enquryUpdatetime:[]

    })
  }
   onProductSubmit()
  {
    // alert("Apply Successfully")
   
    console.log(this.productForm.value);
    this.ss.postProduct(this.productForm.value).subscribe();
    Swal.fire("Apply Succesfully");
    Swal.update({
      icon: 'success'
    })
    window.location.reload();
    
  }
}
