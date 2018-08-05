import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModenotavailableComponent } from './modenotavailable.component';

describe('ModenotavailableComponent', () => {
  let component: ModenotavailableComponent;
  let fixture: ComponentFixture<ModenotavailableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModenotavailableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModenotavailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
