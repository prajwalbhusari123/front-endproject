import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApplicantDetails } from '../Model/applicant-details';
import { Enquiry } from '../Model/enquiry';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  postProduct(enqui:FormGroup)
  {
   
    return  this.http.post<Enquiry>("http://localhost:9093/enquiry",enqui);
  }

  getData()
  {
    return this.http.get<Enquiry[]>("http://localhost:9093/enquiry");
  }

  postregiDetails(regidata:FormData){
    return this.http.post("http://localhost:9093/savedocument",regidata);
  }


  getAllDataRegistedData(){
    return this.http.get("http://localhost:9093/getdocument");
  }


  getDataByApplicantId(appId:any){
    return this.http.get("http://localhost:9093/getdocumentbyid/"+appId);
  }

  deleteByApplicantId(appId:any){
  return this.http.delete("http://localhost:9093/deletebyid/"+appId);
  }

 updadtestatus(status:any){
 return this.http.put("http://localhost:9093/updatestatus",status); //"Approved"
  }


getenquiryId(enqId:any)
{
  return this.http.get("http://localhost:9093/enquiry/"+enqId);
}

getCibil()
{
  return this.http.get("http://localhost:9093/getdata");
}


getCibilScoreById(enquiry:any){
return this.http.put("http://localhost:9093/getCibibyId/",enquiry);
}

underCheckcibil(enquiry:any){
return this.http.put("http://localhost:9093/updateEnquiryCibil/",enquiry);
}

cibilApprove(enquiry){
  return this.http.put("http://localhost:9093/approvecibilbyoe/",enquiry);
}

getApprovedbyOE(status:any){
  return this.http.get("http://localhost:9093/getApprovedbyOE/"+status);
}

cibilReject(enquiry){
  return this.http.put("http://localhost:9093/rejectcibilbyoe/",enquiry);
}


approvalmail(enquiry:any){
  return this.http.post("http://localhost:9093/sendMail/"+enquiry.enquiryId,enquiry);
}

rejectmail(enquiry:any){
  return this.http.post("http://localhost:9093/sendrejectMail/"+enquiry.enquiryId,enquiry);
}

deleteEnquiry(id){
  return this.http.delete("http://localhost:9093/deleteByid/"+id);
}

getwaitingforapprovaldata(status:any){
  return this.http.get("http://localhost:9093/getwaitingforApproval/"+status);
}


verifiedbyoe(applicantstatus){
  return this.http.put("http://localhost:9093/verifystatusbyoe/",applicantstatus);
}

//for get getVerified Application
VerifiedByOE(status){
return this.http.get("http://localhost:9093/verifiedapplication/"+status);
}


rejectedbyoe(applicantstatus){
  return this.http.put("http://localhost:9093/rejectbyoe/",applicantstatus);

}

//save santion Letter info
saveSanLetter(sanletter){
return this.http.post("http://localhost:9093/savesanletter",sanletter);
}

getSanctionData(status){
  return this.http.get("http://localhost:9093/getbySantionLetterSatatus/"+status);
}

getScatiobleterbyid(sid)
{
  return this.http.get("http://localhost:9093/getidforsanct/"+sid)
}

sendsanctionmail(sanctiondata){
return this.http.post("http://localhost:9093/mailWithAttachment/"+sanctiondata.sid,sanctiondata);
}

sanctionstatuschange(sanctiondata){
  return this.http.put("http://localhost:9093/sanctionstatuschange/",sanctiondata);
}

//saveDisbursement
saveDisbusre(disburementdata:any){
return this.http.post("http://localhost:9093/savedisbursementdata",disburementdata);
}


getloanDisbursedata(){
  return this.http.get("http://localhost:9093/getloanDisbursedata/"+"LoanDisburse");
}

loandisbursestatusinsactionletter(sanctiondata){
return this.http.put("http://localhost:9093/loandisbursestatusinsactionletter/",sanctiondata);
}

savescantionLetter(sanctionLetter:any)
{
  return this.http.put("http://localhost:9093/saveSanctionLetter/"+sanctionLetter.sid,sanctionLetter)

}

//genrate PDF By Id
genratepdf(reg:any){
return this.http.get("http://localhost:9093/pdf/getPdf/"+reg.sid);
}


//save ledger imfo
saveledgerdata(ledger:any)
{
  ledger.loanStatus="Ledger Generated"

  return this.http.put("http://localhost:9093/saveLedger/"+ledger.ledgerNumber,ledger);

}


getemidata()
{
  return this.http.get("http://localhost:9093/getLedgerDetailsByStatus/");
}


getledgerdata(ledgerid){

  return this.http.get("http://localhost:9093/getledgerdata/"+ledgerid)
}


saveinstallment(installment:any)
{

  return this.http.put("http://localhost:9093/saveInstallment/"+installment.installmentId,installment)

}

defaulterCountupdateLedger(ledger:any)
{

  return this.http.put("http://localhost:9093/updateLedgerForDefaulterCount",ledger)

}

getInstallmentData()
{

return this.http.get<any[]>("http://localhost:9093/getAllInstallmentDetails")

}

getDefaulterdata()
{
  return this.http.get<any[]>("http://localhost:9093/getLedgerDefaulter/");
}

getLoansetteled()
{
  return this.http.get<any[]>("http://localhost:9093/getloanSetteled/");
}


}

