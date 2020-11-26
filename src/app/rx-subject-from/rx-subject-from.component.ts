import { Component, OnInit } from '@angular/core';
import { from, Subject } from 'rxjs';

@Component({
  selector: 'app-rx-subject-from',
  templateUrl: './rx-subject-from.component.html',
  styleUrls: ['./rx-subject-from.component.scss']
})
export class RxSubjectFromComponent implements OnInit {

  public logs: string[] = [];

  constructor() { }

  ngOnInit(): void {

    const subject = new Subject<number>();

    subject.subscribe({
      next: (n) => this.addLog(`observerA: ${n}`),
    });

    subject.subscribe({
      next: (n) => this.addLog(`observerB: ${n}`),
    });

    const observable = from([1, 2]);

    observable.subscribe(subject);

  }

  public addLog(str: string): void {
    this.logs = [
      ...this.logs,
      str,
    ];
  }

}
