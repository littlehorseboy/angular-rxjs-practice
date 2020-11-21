import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxObservableBasicPracticeTwoComponent } from './rx-observable-basic-practice-two.component';

describe('RxObservableBasicPracticeTwoComponent', () => {
  let component: RxObservableBasicPracticeTwoComponent;
  let fixture: ComponentFixture<RxObservableBasicPracticeTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxObservableBasicPracticeTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxObservableBasicPracticeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
