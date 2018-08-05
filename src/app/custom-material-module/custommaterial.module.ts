import {
  MatButtonModule,
  MatCardModule,
  MatIconModule, MatInputModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatToolbarModule
} from '@angular/material';
import {NgModule} from "@angular/core";

@NgModule({
  imports: [MatButtonModule, MatRadioModule, MatToolbarModule, MatIconModule, MatCardModule, MatProgressSpinnerModule, MatButtonModule, MatInputModule],
  exports: [MatButtonModule, MatRadioModule, MatToolbarModule, MatIconModule, MatCardModule, MatProgressSpinnerModule, MatButtonModule, MatInputModule],
})
export class CustomMaterialModule {
}
