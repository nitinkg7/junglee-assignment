import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletmodeComponent } from './walletmode.component';

describe('WalletmodeComponent', () => {
  let component: WalletmodeComponent;
  let fixture: ComponentFixture<WalletmodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletmodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletmodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
