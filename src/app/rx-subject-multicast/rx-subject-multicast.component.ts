import { Component, OnInit } from '@angular/core';
import { ConnectableObservable, from, Subject } from 'rxjs';
import { multicast } from 'rxjs/operators';

@Component({
  selector: 'app-rx-subject-multicast',
  templateUrl: './rx-subject-multicast.component.html',
  styleUrls: ['./rx-subject-multicast.component.scss']
})
export class RxSubjectMulticastComponent implements OnInit {

  public logs: string[] = [];

  constructor() { }

  ngOnInit(): void {

    const source = from([1, 2, 3]);

    const subject = new Subject();

    const multicasted = source.pipe(
      multicast(subject),
    ) as ConnectableObservable<number>;

    multicasted.subscribe({
      next: (n) => this.addLog(`observerA: ${n}`),
    });
    multicasted.subscribe({
      next: (n) => this.addLog(`observerB: ${n}`),
    });

    multicasted.connect();

  }

  public addLog(str: string): void {
    this.logs = [
      ...this.logs,
      str,
    ];
  }

}
