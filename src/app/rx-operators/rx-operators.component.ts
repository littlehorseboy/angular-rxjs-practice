import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { first, map } from 'rxjs/operators';

@Component({
  selector: 'app-rx-operators',
  templateUrl: './rx-operators.component.html',
  styleUrls: ['./rx-operators.component.scss']
})
export class RxOperatorsComponent implements OnInit {

  public logs: string[] = [];

  constructor() { }

  ngOnInit(): void {

    const observable = of(1, 2, 3);

    // [operators]()()

    map((value: number) => value * value)(observable).subscribe({
      next: (value) => this.addLog(value.toString()),
      complete: () => this.addLog('map done'),
    });

    first()(observable).subscribe({
      next: (value) => this.addLog(value.toString()),
      complete: () => this.addLog('first done'),
    });

    // pipe

    observable.pipe(
      map((value: number) => value * value),
    ).subscribe({
      next: (value) => this.addLog(value.toString()),
      complete: () => this.addLog('pipe map done'),
    });

    observable.pipe(
      first(),
    ).subscribe({
      next: (value) => this.addLog(value.toString()),
      complete: () => this.addLog('pipe first done'),
    });

  }

  addLog(str: string): void {
    this.logs = [
      ...this.logs,
      str,
    ];
  }

}
