import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxPromiseDeferRetryComponent } from './rx-promise-defer-retry.component';

describe('RxPromiseDeferRetryComponent', () => {
  let component: RxPromiseDeferRetryComponent;
  let fixture: ComponentFixture<RxPromiseDeferRetryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxPromiseDeferRetryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxPromiseDeferRetryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
