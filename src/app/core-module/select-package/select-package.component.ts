import {Component, OnInit} from '@angular/core';
import {PackageModel} from "../../models/package.model";
import {APIService} from "../../services/api.service";
import {CommonService} from "../../services/common.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-select-package',
  templateUrl: './select-package.component.html',
  styleUrls: ['./select-package.component.css']
})
export class SelectPackageComponent implements OnInit {

  packageList: PackageModel[];
  loadingPackages = true;
  selectedPackage: PackageModel;
  customAmount: number;

  constructor(private apiService: APIService, private commonService: CommonService, private router: Router) {
  }

  ngOnInit() {
    this.apiService.fetchPaymentPackages().subscribe((data: PackageModel[]) => {
      this.packageList = data;
      this.setSelectedPackage();
      this.loadingPackages = false;
    }, error => {
      this.loadingPackages = false;
    })
  }

  public setSelectedPackage() {
    if (this.packageList.length > 0) {
      this.packageList.sort((p1, p2) => {
        return p1.order - p2.order;
      });
      this.selectedPackage = this.packageList[0];
    }
  }

  public proceedForPayment() {
    if (this.selectedPackage) {
      this.commonService.paymentAmount = this.selectedPackage.custom_price;
    } else {
      this.commonService.paymentAmount = this.customAmount;
    }
    this.router.navigate(['paymentoptions'])
  }
}

