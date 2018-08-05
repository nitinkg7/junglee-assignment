import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PackageModel} from "../models/package.model";
import {environment} from "../../environments/environment";
import {catchError, map} from "rxjs/internal/operators";
import {Observable} from "rxjs/index";
import {BanksModel} from "../models/banks.model";
import {throwError as observableThrowError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private httpClient: HttpClient) {
  }

  public fetchPaymentPackages(): Observable<{} | PackageModel[]> {
    return this.httpClient.get(`${environment.server_url}packages`).pipe(
      map((data: PackageModel[]) => data),
      catchError((error: any) => {
        return observableThrowError(error);
      }));
  }

  public fetchBanks(): Observable<{} | BanksModel[]> {
    return this.httpClient.get(`${environment.server_url}banks`).pipe(
      map((data: BanksModel[]) => data),
      catchError((error: any) => {
        return observableThrowError(error);
      }));
  }

  public validateCardDetails(cardDetails) {
    let dataToPost = {card_details: cardDetails};
    return this.httpClient.post(`${environment.server_url}validate_card`, dataToPost).pipe(
      map((data) => data),
      catchError((error: any) => {
        return observableThrowError(error);
      }));
  }

  public validateBankDetails(bankDetails) {
    let dataToPost = {bank_details: bankDetails};
    return this.httpClient.post(`${environment.server_url}validate_bank_details`, dataToPost).pipe(
      map((data) => data),
      catchError((error: any) => {
        return observableThrowError(error);
      }));
  }

  public validateOTP(otp) {
    let dataToPost = {otp: otp};
    return this.httpClient.post(`${environment.server_url}validate_otp`, dataToPost).pipe(
      map((data) => data),
      catchError((error: any) => {
        return observableThrowError(error);
      }));
  }
}
