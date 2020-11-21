import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-rx-from',
  templateUrl: './rx-from.component.html',
  styleUrls: ['./rx-from.component.scss']
})
export class RxFromComponent implements OnInit {

  public logs: string[] = [];

  constructor() { }

  ngOnInit(): void {

    const observable = from(['10', '20', '30']);

    const subscription = observable.subscribe({
      next: (value) => this.addLog(value),
      complete: () => this.addLog('done'),
    });

    subscription.unsubscribe();

  }

  addLog(str: string): void {
    this.logs = [
      ...this.logs,
      str,
    ];
  }

}
