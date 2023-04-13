import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceService } from 'src/app/Thread/service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private fb:FormBuilder,private cs:ServiceService) { }
  step:any=1;
  productForm:FormGroup;
  register:any[];
  adharImg:any;
  panImg:any;
  cancelCheckImg:any;
  passbookImg:any;
  signatureImg:any;
  photoImg:any;
  quotationImg:any;

  reader=new FileReader();

  ngOnInit(){
    this.productForm=this.fb.group({
      applicantId:[],
      applicantCibilScore:[],
      applicantFname:[],
      applicantLname:[],
      applicantMobNumber:[],
      applicantEmailId:[],                                 
      applicantDob:[],
      applicantOccupation:[],
      applicantAdharno:[],
      applicationPanno:[],
      applicantLoanAmount:[],
      applicatLoantenure:[],
      applicantStatus:[],
      address:this.fb.group({
        addrId:[],
        pinCode:[],
        areaName:[],
        cityName:[],
        stateName:[]
      }),
      vehicaldetail:this.fb.group({
        vehicleId:[],
        vehicleChesisnumber:[],
        vehicleType:[],
        vehiclePrice:[]
      }),
      bankdetails:this.fb.group({
        bankId:[],
        bankName:[],
        bankBranchName:[],
        bankAccountNumber:[],
        bankIFSCCode:[],
        bankAddress:[]
      }),
      document:[]
    })  
  }

  saveDetails(){

      let regiJson:string=JSON.stringify(this.productForm.value);
    const formData=new FormData();
    console.log(formData);
    formData.append("applicationJson",regiJson);
    formData.append("adharCard",this.adharImg);
    formData.append("panCard",this.panImg);
    formData.append("cancelledCheque",this.cancelCheckImg);
    formData.append("passbook",this.passbookImg);
    formData.append("signature",this.signatureImg);
    formData.append("photo",this.photoImg);
    formData.append("quotation",this.quotationImg);
    this.cs.postregiDetails(formData).subscribe((data:any)=>{
      console.log(data);
    })
    alert("Data Saved Succesfully");
    window.location.reload();

  }



  onSelectAdharCard(event){
    console.log(event);
    this.adharImg=event.target.files[0];
  }


  onSelectPanCard(event){
    console.log(event);
    this.panImg=event.target.files[0];
  }

  onSelectCancelCheck(event){
    console.log(event);
    this.cancelCheckImg=event.target.files[0];
  }

  onSelectPassbook(event){
    console.log(event);
    this.passbookImg=event.target.files[0];
  }

  onSelectSignature(event){
    console.log(event);
    this.signatureImg=event.target.files[0];
  }

  onSelectPhoto(event){
    console.log(event);
    this.photoImg=event.target.files[0];
  }

  onSelectQuotation(event){
    console.log(event);
    this.quotationImg=event.target.files[0];
  }
  next(){
    this.step=this.step+1;
  }
  previous(){
    this.step=this.step-1;
  }
}
