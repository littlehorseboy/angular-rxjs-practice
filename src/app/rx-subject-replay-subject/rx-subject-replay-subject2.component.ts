import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-rx-subject-replay-subject2',
  templateUrl: './rx-subject-replay-subject2.component.html',
  styleUrls: ['./rx-subject-replay-subject2.component.scss']
})
export class RxSubjectReplaySubject2Component implements OnInit {

  public logs: string[] = [];

  constructor() { }

  ngOnInit(): void {

    const subject = new ReplaySubject(100, 600);

    subject.subscribe({
      next: (value) => this.addLog(`observerA: ${value}`),
    });

    let i = 0;
    setInterval(() => subject.next(i += 1), 200);

    setTimeout(() => {
      subject.subscribe({
        next: (value) => this.addLog(`observerB: ${value}`),
      });
    }, 1000);

  }

  public addLog(str: string): void {
    this.logs = [
      ...this.logs,
      str,
    ];
  }

}
