import {Component, Input, OnInit} from '@angular/core';
import {APIService} from "../../../../services/api.service";
import {CommonService} from "../../../../services/common.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cardmode',
  templateUrl: './cardmode.component.html',
  styleUrls: ['./cardmode.component.css']
})
export class CardmodeComponent implements OnInit {

  @Input() mode: number;
  monthsList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  yearsList = ["2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026"];
  selectedMonth = "January";
  selectedYear = "2019";
  cardDetails = {card_number: "", expiry_month: "", expiry_year: "", cvv: ""};
  errorMessage: string;

  constructor(private apiService: APIService, private commonService: CommonService, private router: Router) {
  }

  ngOnInit() {
  }

  proceedCardPayment() {
    this.cardDetails.expiry_month = this.selectedMonth;
    this.cardDetails.expiry_year = this.selectedYear;
    this.commonService.cardDetails = this.cardDetails;
    this.apiService.validateCardDetails(this.cardDetails).subscribe((data) => {
      this.router.navigate(['otp']);
    }, error => {
      this.errorMessage = error.error.message;
    })
  }
}
