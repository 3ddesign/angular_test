import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public ngOnInit(): any {
    firebase.initializeApp({
      apiKey: 'AIzaSyDByFQ18c326LZfayEOXHWebSvFMeYWIKk',
      authDomain: 'ang4test-f6666.firebaseapp.com',
    });
  }
}
