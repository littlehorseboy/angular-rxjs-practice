import { Component, OnInit } from '@angular/core';
import { ConnectableObservable, interval, Subject } from 'rxjs';
import { multicast, refCount } from 'rxjs/operators';

@Component({
  selector: 'app-rx-subject-multicast-ref-count',
  templateUrl: './rx-subject-multicast-ref-count.component.html',
  styleUrls: ['./rx-subject-multicast-ref-count.component.scss']
})
export class RxSubjectMulticastRefCountComponent implements OnInit {

  public logs: string[] = [];

  constructor() { }

  ngOnInit(): void {

    const source = interval(500);

    const subject = new Subject<number>();

    const refCounted = source.pipe(
      multicast(subject),
      refCount(),
    ) as ConnectableObservable<number>;

    let subscription1;
    let subscription2;

    this.addLog('observerA subscribed');

    subscription1 = refCounted.subscribe({
      next: (n) => this.addLog(`observerA: ${n}`),
    });

    setTimeout(() => {
      this.addLog('observerB subscribed');
      subscription2 = refCounted.subscribe({
        next: (n) => this.addLog(`observerB: ${n}`),
      });
    }, 600);

    setTimeout(() => {
      this.addLog('observerA unsubscribed');
      subscription1.unsubscribe();
    }, 1200);

    setTimeout(() => {
      this.addLog('observerB unsubscribed');
      subscription2.unsubscribe();
    }, 2000);

  }

  public addLog(str: string): void {
    this.logs = [
      ...this.logs,
      str,
    ];
  }

}
