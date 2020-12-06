import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxSubjectReplaySubjectComponent } from './rx-subject-replay-subject.component';

describe('RxSubjectReplaySubjectComponent', () => {
  let component: RxSubjectReplaySubjectComponent;
  let fixture: ComponentFixture<RxSubjectReplaySubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxSubjectReplaySubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxSubjectReplaySubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
