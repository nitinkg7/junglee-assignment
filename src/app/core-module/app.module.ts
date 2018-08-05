import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CustomMaterialModule} from "../custom-material-module/custommaterial.module";
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {PaymentSuccessComponent} from "./payment-mode/payment-success/payment-success.component";
import {SelectPackageComponent} from "./select-package/select-package.component";
import {PaymentOptionsComponent} from "./payment-mode/payment-options/payment-options.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CardmodeComponent } from './payment-mode/payment-options/cardmode/cardmode.component';
import { NetbankingmodeComponent } from './payment-mode/payment-options/netbankingmode/netbankingmode.component';
import { WalletmodeComponent } from './payment-mode/payment-options/walletmode/walletmode.component';
import { CashcardmodeComponent } from './payment-mode/payment-options/cashcardmode/cashcardmode.component';
import { ModenotavailableComponent } from './payment-mode/payment-options/modenotavailable/modenotavailable.component';
import { LeftmenuoptionsComponent } from './payment-mode/payment-options/leftmenuoptions/leftmenuoptions.component';
import { OtpComponent } from './authentication/otp/otp.component';
import { BankdetailsComponent } from './authentication/bankdetails/bankdetails.component';

@NgModule({
  declarations: [
    AppComponent, SelectPackageComponent, PaymentOptionsComponent, PaymentSuccessComponent, CardmodeComponent, NetbankingmodeComponent, WalletmodeComponent, CashcardmodeComponent, ModenotavailableComponent, LeftmenuoptionsComponent, OtpComponent, BankdetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CustomMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(rootRouterConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
