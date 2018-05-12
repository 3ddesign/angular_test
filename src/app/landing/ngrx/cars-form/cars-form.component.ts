import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import * as moment from 'moment';
import {AppState} from '../redux/app.state';
import {Car} from '../car.model';
import {AddCar} from '../redux/cars.action';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.css']
})
export class CarsFormComponent {
  public carName: string = '';
  public carModel: string = '';

  private id: number = 2;

  public constructor(private store: Store<AppState>) {
  }

  public onAdd(): void {
    if (this.carModel === '' || this.carName === '') return

    this.id = ++this.id;

    const car = new Car(
      this.carName,
      moment().format('DD.MM.YY'),
      this.carModel,
      false,
      this.id
    );

    this.store.dispatch(new AddCar(car));

    this.carModel = '';
    this.carName = '';
  }
}
