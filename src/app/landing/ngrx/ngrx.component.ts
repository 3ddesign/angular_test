import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Car, Cars} from './car.model';
import {AppState} from './redux/app.state';
import {Observable} from 'rxjs/Observable';
import {RemoveCar} from './redux/cars.action';

@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.scss']
})
export class NgrxComponent implements OnInit {

  public cars: Car[] = [];

  public carState: Observable<Cars>;

  public constructor(private store: Store<AppState>) {}

  public ngOnInit(): void {
    this.carState = this.store.select('carPage');
  }

  public onDelete(car: Car): void {
    // this.cars = this.cars.filter(c => c.id !== car.id);
    this.store.dispatch(new RemoveCar(car));

  }
}
