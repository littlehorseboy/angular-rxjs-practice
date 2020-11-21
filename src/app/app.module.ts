import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxObservableBasicPracticeModule } from './rx-observable-basic-practice/rx-observable-basic-practice.module';
import { RxObservableBasicPracticeTwoModule } from './rx-observable-basic-practice-two/rx-observable-basic-practice-two.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RxObservableBasicPracticeModule,
    RxObservableBasicPracticeTwoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
