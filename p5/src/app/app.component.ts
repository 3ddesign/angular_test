import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h2>Drag / drop the item</h2>
  <ngx-sortable [items]="items" [name]="'List'">
  <ng-template let-item>
      <div class="sortable-list-item">
          {{item}}
      </div>
  </ng-template>
</ngx-sortable>
`
})
export class AppComponent {
  items = [1, 2, 3, 4, 5];

}
