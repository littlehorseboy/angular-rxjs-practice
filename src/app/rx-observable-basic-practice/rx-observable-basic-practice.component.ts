import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rx-observable-basic-practice',
  templateUrl: './rx-observable-basic-practice.component.html',
  styleUrls: ['./rx-observable-basic-practice.component.scss']
})
export class RxObservableBasicPracticeComponent implements OnInit {

  public logs: string[] = [];

  constructor() { }

  ngOnInit(): void {

    const observable = new Observable((subscriber) => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });

    console.log('just before subscribe');

    observable.subscribe({
      next: (x) => {
        this.logs = [
          ...this.logs,
          `got value ${x}`,
        ];
       },
      error: (error) => {
        this.logs = [
          ...this.logs,
          `something wrong occurred ${error}`,
        ];
      },
      complete: () => {
        this.logs = [
          ...this.logs,
          'done',
        ];
      },
    });

  }

}
