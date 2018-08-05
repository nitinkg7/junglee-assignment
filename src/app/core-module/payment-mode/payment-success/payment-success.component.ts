import {Component, OnInit} from '@angular/core';
import {CommonService} from "../../../services/common.service";

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css']
})
export class PaymentSuccessComponent implements OnInit {

  paymentAmount: number;

  constructor(private commonService: CommonService) {
  }

  ngOnInit() {
    this.paymentAmount = this.commonService.paymentAmount;
    this.resetAppData();
  }

  private resetAppData() {
    this.commonService.reset();
  }

  ngOnDestroy() {
    this.commonService.paymentSuccess = false;
  }

}
