import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-rx-subject-behavior-subject',
  templateUrl: './rx-subject-behavior-subject.component.html',
  styleUrls: ['./rx-subject-behavior-subject.component.scss']
})
export class RxSubjectBehaviorSubjectComponent implements OnInit {

  public logs: string[] = [];

  constructor() { }

  ngOnInit(): void {

    const subject = new BehaviorSubject(0);

    subject.subscribe({
      next: (value) => this.addLog(`observerA: ${value}`),
    });

    subject.next(1);
    subject.next(2);

    subject.subscribe({
      next: (value) => this.addLog(`observerB: ${value}`),
    });

    subject.next(3);

  }

  public addLog(str: string): void {
    this.logs = [
      ...this.logs,
      str,
    ];
  }

}
