import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rx-observable-basic-practice-two',
  templateUrl: './rx-observable-basic-practice-two.component.html',
  styleUrls: ['./rx-observable-basic-practice-two.component.scss']
})
export class RxObservableBasicPracticeTwoComponent implements OnInit {

  public logs: string[] = [];

  constructor() { }

  ngOnInit(): void {

    const observable: Observable<string> = new Observable((subscriber) => {
      this.addLog('hello');

      subscriber.next('' + 1);
      subscriber.next('' + 2);
      subscriber.next('' + 3);
      setTimeout(() => {
        subscriber.next('' + 4);
        subscriber.complete();
      }, 1000);
    });

    this.addLog('before');

    observable.subscribe({
      next: (value) => this.addLog(value),
      error: (error) => this.addLog(`something wrong occurred ${error}`),
      complete: () => this.addLog('done'),
    });

    this.addLog('after');

  }

  addLog(str: string): void {
    this.logs = [
      ...this.logs,
      str,
    ];
  }

}
