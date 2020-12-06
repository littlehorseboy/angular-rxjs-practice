import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxSubjectMulticastRefCountComponent } from './rx-subject-multicast-ref-count.component';

describe('RxSubjectMulticastRefCountComponent', () => {
  let component: RxSubjectMulticastRefCountComponent;
  let fixture: ComponentFixture<RxSubjectMulticastRefCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxSubjectMulticastRefCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxSubjectMulticastRefCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
