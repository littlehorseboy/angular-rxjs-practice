import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-rx-subject',
  templateUrl: './rx-subject.component.html',
  styleUrls: ['./rx-subject.component.scss']
})
export class RxSubjectComponent implements OnInit {

  public logs: string[] = [];

  public callbackCount = 0;

  constructor() { }

  ngOnInit(): void {

    const subject = new Subject<number>();

    subject.subscribe({
      next: (n) => this.addLog(`observerA: ${n}`),
    });

    subject.subscribe({
      next: (n) => this.addLog(`observerB: ${n}`),
    });

    subject.next(1);
    subject.next(2);

  }

  public addLog(str: string): void {
    this.logs = [
      ...this.logs,
      str,
    ];
  }

}
