import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxSubjectReplaySubjectComponent } from './rx-subject-replay-subject.component';
import { RxSubjectReplaySubject2Component } from './rx-subject-replay-subject2.component';



@NgModule({
  declarations: [
    RxSubjectReplaySubjectComponent,
    RxSubjectReplaySubject2Component,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RxSubjectReplaySubjectComponent,
    RxSubjectReplaySubject2Component,
  ],
})
export class RxSubjectReplaySubjectModule { }
