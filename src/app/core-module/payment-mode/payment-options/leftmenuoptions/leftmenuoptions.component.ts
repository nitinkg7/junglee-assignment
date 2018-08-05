import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-leftmenuoptions',
  templateUrl: './leftmenuoptions.component.html',
  styleUrls: ['./leftmenuoptions.component.css']
})
export class LeftmenuoptionsComponent implements OnInit {
  selectedMode: number = 0;
  @Output() changePaymentMode: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  selectPaymentMode(mode: number) {
    this.selectedMode = mode;
    this.changePaymentMode.emit(mode);
  }

}
