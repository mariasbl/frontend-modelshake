import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private _tab = new Subject<string>();
  tab$: Observable<string>;

  constructor() {
    this.tab$ = this._tab.asObservable();
  }

  updateTab(tab: string) {
    this._tab.next(tab);
  }

}
