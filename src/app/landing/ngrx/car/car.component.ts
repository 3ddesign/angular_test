import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Car} from '../car.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {

  @Input() car: Car;
  @Output() deleteCar = new EventEmitter<Car>();

  public onDelete(): void {
    this.deleteCar.emit(this.car);
  }

  public onBuy(): void {
    this.car.isSold = true;
  }

}
