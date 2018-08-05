import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftmenuoptionsComponent } from './leftmenuoptions.component';

describe('LeftmenuoptionsComponent', () => {
  let component: LeftmenuoptionsComponent;
  let fixture: ComponentFixture<LeftmenuoptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftmenuoptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftmenuoptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
