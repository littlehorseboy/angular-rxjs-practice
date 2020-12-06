import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxSubjectReplaySubject2Component } from './rx-subject-replay-subject2.component';

describe('RxSubjectReplaySubject2Component', () => {
  let component: RxSubjectReplaySubject2Component;
  let fixture: ComponentFixture<RxSubjectReplaySubject2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxSubjectReplaySubject2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxSubjectReplaySubject2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
