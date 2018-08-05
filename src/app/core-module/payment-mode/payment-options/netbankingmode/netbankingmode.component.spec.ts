import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetbankingmodeComponent } from './netbankingmode.component';

describe('NetbankingmodeComponent', () => {
  let component: NetbankingmodeComponent;
  let fixture: ComponentFixture<NetbankingmodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetbankingmodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetbankingmodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
