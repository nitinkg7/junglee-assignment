import {CanActivate, Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {CommonService} from "../common.service";

@Injectable({
  providedIn: 'root'
})
export class OtpGuard implements CanActivate {
  constructor(private commonService: CommonService, private router: Router) {

  }

  canActivate() {
    if (this.commonService.cardDetails || this.commonService.bankDetails) {
      return true;
    } else {
      window.alert("Sorry! You are on the wrong page! Please select a package!");
      this.router.navigate(['']);
    }
  }
}
