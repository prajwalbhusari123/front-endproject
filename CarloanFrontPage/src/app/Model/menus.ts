export class Menus {

    public static menus:Array<any>=
    [
        {
            re:[

                { label:'View Enquiry', key:'checkenquiry'},
                { label:"Register", key:'registerhere'},
                { label:"View Register Data", key:'viewreg'},
                {label:"Enquiry Approve", key:'approve'},
                {label:"Enquiry Reject", key:'reject'},
                {label:"Sanction Application",key:'sanctionApprovebycm'}
            ],

            oe:[
                {label:'Check Cibil', key:'checkcibil'},
                {label:'View Register Data', key:'viewregdata'},
                {label:'varified Application', key:'verifiedapplication'},
                {label:'Reject Application', key:'rejectapplication'}
            ],

            cm:[
                {label:'Check Application', key:'checkverifiedapplication'}
                //{label:'viewsantiondata', key:'sanctiondata'}
            ],

            ah:[
                {label:'Sanction Applicaton' , key:'sanctiondata'},
                {label:'Loan Disburse Data',key:'getLoanDisbursedata'},
             //   {label:'View Ledger', key:'viewledger'},
                {label:'View Ledger (emi)', key:'emilist'},
                {label:'Installment Details', key:'viewinstallment'},
                {label:'view Defaulter',key:'defaulterdata'},
                {label:'Loan Clear',key:'loanpaid'}  
            ]
            
        }
    ]
}
