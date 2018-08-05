import {Injectable} from '@angular/core';
import {BanksModel} from "../models/banks.model";

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public paymentAmount = 0;
  public paymentSuccess = false;
  public cardDetails;
  public bankDetails;
  public selectedBank: BanksModel;

  constructor() {
  }

  reset() {
    this.paymentAmount = 0;
    this.cardDetails = null;
    this.bankDetails = null;
    this.selectedBank = null;
  }
}
