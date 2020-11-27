import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxSubjectMulticastComponent } from './rx-subject-multicast.component';

describe('RxSubjectMulticastComponent', () => {
  let component: RxSubjectMulticastComponent;
  let fixture: ComponentFixture<RxSubjectMulticastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxSubjectMulticastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxSubjectMulticastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
