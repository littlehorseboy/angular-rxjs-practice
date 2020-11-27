import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxObservableBasicPracticeModule } from './rx-observable-basic-practice/rx-observable-basic-practice.module';
import { RxObservableBasicPracticeTwoModule } from './rx-observable-basic-practice-two/rx-observable-basic-practice-two.module';
import { RxFromModule } from './rx-from/rx-from.module';
import { RxOperatorsModule } from './rx-operators/rx-operators.module';
import { RxSubjectModule } from './rx-subject/rx-subject.module';
import { RxPromiseDeferRetryModule } from './rx-promise-defer-retry/rx-promise-defer-retry.module';
import { RxSubjectFromModule } from './rx-subject-from/rx-subject-from.module';
import { RxSubjectMulticastModule } from './rx-subject-multicast/rx-subject-multicast.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RxObservableBasicPracticeModule,
    RxObservableBasicPracticeTwoModule,
    RxFromModule,
    RxOperatorsModule,
    RxSubjectModule,
    RxPromiseDeferRetryModule,
    RxSubjectFromModule,
    RxSubjectMulticastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
