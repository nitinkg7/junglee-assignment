import {Component, OnInit} from '@angular/core';
import {BanksModel} from "../../../../models/banks.model";
import {APIService} from "../../../../services/api.service";
import {CommonService} from "../../../../services/common.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-netbankingmode',
  templateUrl: './netbankingmode.component.html',
  styleUrls: ['./netbankingmode.component.css']
})
export class NetbankingmodeComponent implements OnInit {
  banksList: BanksModel[];
  showError = false;
  loadingBanks = true;
  selectedBank: BanksModel;
  popularBanks: BanksModel[];
  constructor(private apiService: APIService, private commonService: CommonService, private router: Router) {
  }

  ngOnInit() {
    this.apiService.fetchBanks().subscribe((data: BanksModel[]) => {
      this.banksList = data;
      this.setupData();
      this.loadingBanks = false;
    }, error => {
      this.loadingBanks = false;
      this.showError = true;
    })
  }

  private setupData() {
    if (!this.banksList || this.banksList.length === 0) {
      this.showError = true;
    } else {
      this.popularBanks = this.banksList.filter((bank)=>{
        return bank.is_popular;
      });
      this.selectedBank = this.banksList[0];
    }
  }

  proceedBankPayment() {
    this.commonService.selectedBank = this.selectedBank;
    this.router.navigate(['bankdetails']);
  }
}
