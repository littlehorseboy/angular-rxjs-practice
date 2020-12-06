import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-rx-subject-replay-subject',
  templateUrl: './rx-subject-replay-subject.component.html',
  styleUrls: ['./rx-subject-replay-subject.component.scss']
})
export class RxSubjectReplaySubjectComponent implements OnInit {

  public logs: string[] = [];

  constructor() { }

  ngOnInit(): void {

    const subject = new ReplaySubject(2);

    subject.subscribe({
      next: (value) => this.addLog(`observerA: ${value}`),
    });

    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);

    subject.subscribe({
      next: (value) => this.addLog(`observerB: ${value}`),
    });

    subject.next(5);

  }

  public addLog(str: string): void {
    this.logs = [
      ...this.logs,
      str,
    ];
  }

}
