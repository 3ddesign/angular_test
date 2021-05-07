import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import * as TutorialActions from './../actions/test.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  constructor(private store: Store<AppState>) { }

  addItem(name: any, url: any) {
    this.store.dispatch(new TutorialActions.AddItem({name: name, url: url}))
  }
}
