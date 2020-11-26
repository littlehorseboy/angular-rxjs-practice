import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxSubjectFromComponent } from './rx-subject-from.component';

describe('RxSubjectFromComponent', () => {
  let component: RxSubjectFromComponent;
  let fixture: ComponentFixture<RxSubjectFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxSubjectFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxSubjectFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
