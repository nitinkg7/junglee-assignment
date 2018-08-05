import {Component, OnInit} from '@angular/core';
import {APIService} from "../../../services/api.service";
import {CommonService} from "../../../services/common.service";

@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.component.html',
  styleUrls: ['./payment-options.component.css']
})
export class PaymentOptionsComponent implements OnInit {
  selectedMode: number = 0;

  constructor(private apiService: APIService, private commonService: CommonService) {
  }

  ngOnInit() {
  }

  updatePaymentMode(mode: number) {
    this.selectedMode = mode;
  }

  getPaymentAmout(): number {
    return this.commonService.paymentAmount;
  }

  isPaymentSuccess(): boolean {
    return this.commonService.paymentSuccess;
  }
}
