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

    const observable: Observable<number> = new Observable((subscriber) => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });

    this.addLog('just before subscribe');

    observable.subscribe({
      next: (value) => this.addLog(`got value ${value}`),
      error: (error) => this.addLog(`something wrong occurred ${error}`),
      complete: () => this.addLog('done'),
    });

    this.addLog('just after subscribe');

  }

  addLog(str: string): void {
    this.logs = [
      ...this.logs,
      str,
    ];
  }

}
