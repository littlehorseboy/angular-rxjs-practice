import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-rx-subject-async-subject',
  templateUrl: './rx-subject-async-subject.component.html',
  styleUrls: ['./rx-subject-async-subject.component.scss']
})
export class RxSubjectAsyncSubjectComponent implements OnInit {

  public logs: string[] = [];

  constructor() { }

  ngOnInit(): void {

    const subject = new AsyncSubject();

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
    subject.complete();

  }

  public addLog(str: string): void {
    this.logs = [
      ...this.logs,
      str,
    ];
  }

}
