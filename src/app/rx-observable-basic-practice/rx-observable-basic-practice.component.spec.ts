import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxObservableBasicPracticeComponent } from './rx-observable-basic-practice.component';

describe('RxObservableBasicPracticeComponent', () => {
  let component: RxObservableBasicPracticeComponent;
  let fixture: ComponentFixture<RxObservableBasicPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxObservableBasicPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxObservableBasicPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
