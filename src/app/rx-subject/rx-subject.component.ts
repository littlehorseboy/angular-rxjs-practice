import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { catchError, map, retryWhen } from 'rxjs/operators';

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

    const observable: Observable<number> = from(this.getId());

    observable.pipe(
      map((n) => {
        if (n < 5) {
          this.callbackCount += 1;
          throw new Error('error');
        }
        return n;
      }),
      catchError((err) => err),
    ).subscribe({
      next: (n) => {
        this.addLog(n.toString());
      },
      error: (error) => {
        this.addLog(error.toString());
      },
    });

  }

  public getId(): Promise<number> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.callbackCount);
      }, 1000);
    });
  }

  public addLog(str: string): void {
    this.logs = [
      ...this.logs,
      str,
    ];
  }

}
