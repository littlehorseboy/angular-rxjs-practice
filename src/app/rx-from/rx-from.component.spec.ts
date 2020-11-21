import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxFromComponent } from './rx-from.component';

describe('RxFromComponent', () => {
  let component: RxFromComponent;
  let fixture: ComponentFixture<RxFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
