import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h2>Drag / drop the item</h2>
  <div >
    <div *ngFor="let item of items">{{ item }}</div>
  </div>
`
})
export class AppComponent {
  items = [1, 2, 3, 4, 5];
}
