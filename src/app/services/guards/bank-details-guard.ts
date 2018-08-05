import {CanActivate, Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {CommonService} from "../common.service";

@Injectable({
  providedIn: 'root'
})
export class BankDetailsGuard implements CanActivate {
  constructor(private commonService: CommonService, private router: Router) {

  }

  canActivate() {
    if (this.commonService.selectedBank) {
      return true;
    } else {
      window.alert("There is something wrong with your bank selection! Please select a package again!");
      this.router.navigate(['']);
    }
  }
}
