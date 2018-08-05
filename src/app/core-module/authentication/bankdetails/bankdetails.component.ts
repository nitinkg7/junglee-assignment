import {Component, OnInit} from '@angular/core';
import {APIService} from "../../../services/api.service";
import {CommonService} from "../../../services/common.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-bankdetails',
  templateUrl: './bankdetails.component.html',
  styleUrls: ['./bankdetails.component.css']
})
export class BankdetailsComponent implements OnInit {
  account_id: string;
  routing_id: string;
  errorMessage: string;

  constructor(private apiService: APIService, private commonService: CommonService, private router: Router) {
  }

  ngOnInit() {
  }


  proceedFinalConfirmation() {
    let bankDetails = {account_id: this.account_id, routing_id: this.routing_id};
    this.commonService.bankDetails = bankDetails;
    this.apiService.validateBankDetails(bankDetails).subscribe(data => {
      this.router.navigate(['otp']);
    }, error => {
      this.errorMessage = error.error.message;
    });
  }

  getBankName() {
    return this.commonService.selectedBank.name;
  }
}
