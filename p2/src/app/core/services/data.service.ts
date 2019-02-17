import { Injectable } from '@angular/core';

import { take } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  private data = { data1: [], data2: [] };
  private _masterDataMenu: BehaviorSubject<any> = new BehaviorSubject(
    this.data
  );

  constructor() {}

  setData() {
    this.data = { data1: ['added'], data2: ['added'] };
    this._masterDataMenu.next(this.data);
  }

  get getData() {
    return this._masterDataMenu.asObservable();
  }
}
