import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxSubjectBehaviorSubjectComponent } from './rx-subject-behavior-subject.component';

describe('RxSubjectBehaviorSubjectComponent', () => {
  let component: RxSubjectBehaviorSubjectComponent;
  let fixture: ComponentFixture<RxSubjectBehaviorSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxSubjectBehaviorSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxSubjectBehaviorSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
