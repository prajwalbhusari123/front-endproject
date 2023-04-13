import { Component } from '@angular/core';

@Component({
  selector: 'app-emi-cal',
  templateUrl: './emi-cal.component.html',
  styleUrls: ['./emi-cal.component.css']
})
export class EmiCalComponent {

  title = 'CarLoanProject';
  
  loanAmount: number = 200000;
  tenure: number = 10;
  interest: number = 5;
  emi: number = 0;
  calculate() {
    var outstandingAmount =
      Number(this.loanAmount) +
      Number(this.loanAmount * (this.interest / 100));
    this.emi = outstandingAmount / this.tenure;
  }
}
