import { Item } from '../model/test.model'
import * as ItemActions from '../actions/test.actions'

const initialState: Item = {
    name: 'Initial data',
    url: 'http://scherbakov.com.ua'
}

export function reducer(state: Item[] = [initialState], action: ItemActions.Actions) {
  switch(action.type) {
      case ItemActions.ADD_ITEM:
          return [...state, action.payload];

      case ItemActions.REMOVE_ITEM:

      state.splice(action.payload, 1)
          return state;
      default:
          return state;
  }
}
