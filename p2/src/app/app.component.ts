import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public arr = ['active', 'active', 'panding', 'panding']
  constructor() {}

  ngOnInit() {
    this.arr.forEach(function(item, i) {
      console.log(`${item} index: ${++i}`);
    });
  }

}
