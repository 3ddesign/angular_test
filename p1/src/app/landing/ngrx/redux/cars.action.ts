import {Action} from '@ngrx/store';
import {Car} from '../car.model';

export namespace CAR_ACTIONS {
  export const ADD_CAR: any = 'ADD_CAR';
  export const REMOVE_CAR: any = 'REMOVE_CAR';
}

export class AddCar implements Action {
  public readonly type: any = CAR_ACTIONS.ADD_CAR;
  public constructor(public payload: Car) {}
}

export class RemoveCar implements Action {
  public readonly type: any = CAR_ACTIONS.REMOVE_CAR;
  public constructor(public payload: Car) {}
}
