import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cashcardmode',
  templateUrl: './cashcardmode.component.html',
  styleUrls: ['./cashcardmode.component.css']
})
export class CashcardmodeComponent implements OnInit {
  @Input() mode: string;
  constructor() { }

  ngOnInit() {
  }

}
