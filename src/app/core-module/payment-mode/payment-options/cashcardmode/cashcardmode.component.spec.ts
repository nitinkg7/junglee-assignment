import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashcardmodeComponent } from './cashcardmode.component';

describe('CashcardmodeComponent', () => {
  let component: CashcardmodeComponent;
  let fixture: ComponentFixture<CashcardmodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashcardmodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashcardmodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
