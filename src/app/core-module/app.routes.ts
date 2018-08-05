import {Routes} from "@angular/router";
import {SelectPackageComponent} from "./select-package/select-package.component";
import {PaymentOptionsComponent} from "./payment-mode/payment-options/payment-options.component";
import {OtpComponent} from "./authentication/otp/otp.component";
import {BankdetailsComponent} from "./authentication/bankdetails/bankdetails.component";
import {OtpGuard} from "../services/guards/otpguard";
import {PaymentOptionGuard} from "../services/guards/payment-option-guard";
import {BankDetailsGuard} from "../services/guards/bank-details-guard";

export const rootRouterConfig: Routes = [
  {
    path: "",
    redirectTo: "selectpackage",
    pathMatch: "full"
  },
  {
    path: "selectpackage",
    component: SelectPackageComponent,
    pathMatch: "full"
  },
  {
    path: "paymentoptions",
    component: PaymentOptionsComponent,
    canActivate: [PaymentOptionGuard],
    pathMatch: "full"
  },
  {
    path: "otp",
    component: OtpComponent,
    canActivate: [OtpGuard],
    pathMatch: "full"
  },
  {
    path: "bankdetails",
    component: BankdetailsComponent,
    canActivate: [BankDetailsGuard],
    pathMatch: "full"
  },
  {path: '**', redirectTo: "selectpackage"}
];

