import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxSubjectMulticastUnsubscribeComponent } from './rx-subject-multicast-unsubscribe.component';

describe('RxSubjectMulticastUnsubscribeComponent', () => {
  let component: RxSubjectMulticastUnsubscribeComponent;
  let fixture: ComponentFixture<RxSubjectMulticastUnsubscribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxSubjectMulticastUnsubscribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxSubjectMulticastUnsubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
