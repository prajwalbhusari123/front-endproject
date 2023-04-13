import { Address } from "./address";
import { BankDetails } from "./bank-details";
import { VehicleDetails } from "./vehicle-details";

export class ApplicantDetails {
    applicantId:any;
    applicantCibilScore:any;
    applicantFname:any;
    applicantLname:any;
    applicantMobNumber:any;
    applicantEmailId:any;                                 
    applicantDob:any;
    applicantOccupation:any;
    applicantAdharno:any;
    applicationPanno:any;
    applicantLoanAmount:any;
    applicatLoantenure:any;
    applicantStatus:any;
    address:Address;
    vehicaldetail:VehicleDetails;
    bankdetails:BankDetails;
    document:Document;
}
