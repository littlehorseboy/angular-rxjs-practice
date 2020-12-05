import { Component, OnInit } from '@angular/core';
import { defer, of, throwError } from 'rxjs';
import { mergeMap, retry } from 'rxjs/operators';

@Component({
  selector: 'app-rx-promise-defer-retry',
  templateUrl: './rx-promise-defer-retry.component.html',
  styleUrls: ['./rx-promise-defer-retry.component.scss']
})
export class RxPromiseDeferRetryComponent implements OnInit {

  public logs: string[] = [];

  public callbackCount = 0;

  constructor() { }

  ngOnInit(): void {

    const deferPromise = defer(() => this.getId());

    deferPromise.pipe(
      mergeMap((n) => {
        if (n < 5) {
          return throwError('error');
        }
        return of(n);
      }),
      retry(4),
    ).subscribe({
      next: (n) => {
        this.addLog(`next: ${n}`);
      },
      error: (error) => {
        this.addLog(error.toString());
      },
    });

  }

  public getId(): Promise<number> {
    return new Promise((resolve) => {
      this.addLog(this.callbackCount.toString());
      setTimeout(() => {
        this.callbackCount += 1;
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
