import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxOperatorsComponent } from './rx-operators.component';

describe('RxOperatorsComponent', () => {
  let component: RxOperatorsComponent;
  let fixture: ComponentFixture<RxOperatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxOperatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
