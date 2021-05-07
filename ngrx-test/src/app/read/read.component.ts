import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as ItemActions from './../actions/test.actions';
import { AppState } from './../app.state';
import { Item } from './../model/test.model';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent {

  items: Observable<Item[]>;

  constructor(private store: Store<AppState>) {
    this.items = store.select('item')
  }

  delItem(index: number): void {
    this.store.dispatch(new ItemActions.RemoveItem(index))
  }
}
