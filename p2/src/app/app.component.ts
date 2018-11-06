import {Component, OnInit} from '@angular/core';
import {interval, Observable, Observer, Subject, Subscription} from 'rxjs/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public numbersObsSubscription: Subscription;
  public customObsSubscription: Subscription;
  public testSub = new Subject();

  public ngOnInit(): any {
    // this.interval();
    this.subj();
  }

  interval() {
    const secondsCounter = interval(1000);
    secondsCounter.subscribe(n =>
      console.log(`It's been ${n} seconds since subscribing!`));
  }

  subj() {
    this.testSub.subscribe(res => {
      console.log(res);
    });

    setInterval(() => {
      this.testSub.next('change');
    }, 3000);
  }
}
