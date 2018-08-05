import {Component, OnInit} from '@angular/core';
import {APIService} from "../../../services/api.service";
import {CommonService} from "../../../services/common.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  otp: string;
  errorMessage: string;

  constructor(private apiService: APIService, private commonService: CommonService, private router: Router) {
  }

  ngOnInit() {
  }

  submitOTP() {
    this.apiService.validateOTP(this.otp).subscribe(data => {
      this.commonService.paymentSuccess = true;
      this.router.navigate(['paymentoptions']);
    }, error => {
      this.errorMessage = error.error.message;
    })
  }
}
