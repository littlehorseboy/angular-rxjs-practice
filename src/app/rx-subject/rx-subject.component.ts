import { Component, OnInit } from '@angular/core';
import { defer, of, throwError } from 'rxjs';
import { mergeMap, retry } from 'rxjs/operators';

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

    const deferPromise = defer(() => this.getId());

    // const observable: Observable<number> = from(this.getId());

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
