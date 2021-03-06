import { Component, OnInit } from '@angular/core';
import { ConnectableObservable, interval, Subject } from 'rxjs';
import { multicast } from 'rxjs/operators';

@Component({
  selector: 'app-rx-subject-multicast-unsubscribe',
  templateUrl: './rx-subject-multicast-unsubscribe.component.html',
  styleUrls: ['./rx-subject-multicast-unsubscribe.component.scss']
})
export class RxSubjectMulticastUnsubscribeComponent implements OnInit {

  public logs: string[] = [];

  constructor() { }

  ngOnInit(): void {

    const source = interval(500);

    const subject = new Subject<number>();

    const multicasted = source.pipe(
      multicast(subject),
    ) as ConnectableObservable<number>;

    let subscription1;
    let subscription2;
    let subscriptionConnect;

    this.addLog('observerA subscribed');
    subscription1 = multicasted.subscribe({
      next: (value) => this.addLog(`observerA: ${value}`),
    });

    subscriptionConnect = multicasted.connect();

    setTimeout(() => {
      this.addLog('observerB subscribed');
      subscription2 = multicasted.subscribe({
        next: (value) => this.addLog(`observerB: ${value}`),
      });
    }, 600);

    setTimeout(() => {
      this.addLog('observerA unsubscribed');
      subscription1.unsubscribe();
    }, 1200);

    setTimeout(() => {
      this.addLog('observerB unsubscribed');
      subscription2.unsubscribe();
      subscriptionConnect.unsubscribe();
    }, 2000);

  }

  public addLog(str: string): void {
    this.logs = [
      ...this.logs,
      str,
    ];
  }

}
