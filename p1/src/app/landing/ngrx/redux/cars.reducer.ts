import {Car} from '../car.model';
import {AddCar, CAR_ACTIONS} from './cars.action';

const initialState: any = {
  cars: [
    new Car('Ford', '12.12.12', 'Focus', false, 1),
    new Car('Audi', '08.08.12', 'A4', false, 2)
  ]
};

export function carsReducer(state: any = initialState, action: AddCar): any {
  switch (action.type) {
    case CAR_ACTIONS.ADD_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payload]
      };
    case CAR_ACTIONS.REMOVE_CAR:
      return {
        ...state,
        cars: [...state.cars.filter(c => c.id !== action.payload.id)]
      };
    default:
      return state;
  }
}
