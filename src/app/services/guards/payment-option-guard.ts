import {CanActivate, Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {CommonService} from "../common.service";

@Injectable({
  providedIn: 'root'
})
export class PaymentOptionGuard implements CanActivate {
  constructor(private commonService: CommonService, private router: Router) {

  }

  canActivate() {
    if (this.commonService.paymentAmount > 0 || this.commonService.paymentSuccess) {
      return true;
    } else {
      window.alert("Please select a package first!");
      this.router.navigate(['']);
    }
  }
}
