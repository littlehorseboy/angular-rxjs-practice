import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxSubjectAsyncSubjectComponent } from './rx-subject-async-subject.component';

describe('RxSubjectAsyncSubjectComponent', () => {
  let component: RxSubjectAsyncSubjectComponent;
  let fixture: ComponentFixture<RxSubjectAsyncSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxSubjectAsyncSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxSubjectAsyncSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
