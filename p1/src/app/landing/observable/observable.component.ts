import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})

export class ObservableComponent implements OnInit, OnDestroy {
  public numbersObsSubscription: Subscription;
  public customObsSubscription: Subscription;

  public ngOnInit(): any {
    const myNumbers: any = Observable.interval(1000)
      .map(
        (data: number) => {
          return data * 2;
        }
      );
    this.numbersObsSubscription = myNumbers.subscribe(
      (num: number) => {
        console.log(num);
      }
    );

    const myObservable: any = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        // observer.error('this does not work');
        observer.complete();
      }, 5000);
      setTimeout(() => {
        observer.next('third package');
      }, 6000);
    });

    this.customObsSubscription = myObservable.subscribe(
      (data: string) => { console.log(data); },
      (error: string) => { console.log(error); },
      () => { console.log('completed'); }
    );
  }

  public ngOnDestroy(): void {
    this.numbersObsSubscription.unsubscribe();
    this.customObsSubscription.unsubscribe();
  }

}
