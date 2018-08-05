import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardmodeComponent } from './cardmode.component';

describe('CardmodeComponent', () => {
  let component: CardmodeComponent;
  let fixture: ComponentFixture<CardmodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardmodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardmodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
