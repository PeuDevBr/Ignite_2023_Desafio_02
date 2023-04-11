import { produce } from 'immer'

import { ProductProps } from '../../contexts/DeliveryContext'
import { ActionTypes } from './actions'

export function cartReducer(state: ProductProps[], action: any) {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT_IN_CART_LIST: {
      return produce(state, (draft) => {
        draft.push(action.payload.coffee)
      })
    }

    case ActionTypes.UPDATE_PRODUCT_QUANTITY_IN_HOME_TO_CART_LIST: {
      const coffee = action.payload.coffee
      const currentCoffeeIndex = action.payload.currentCoffeeIndex

      return produce(state, (draft) => {
        draft[currentCoffeeIndex].count =
          draft[currentCoffeeIndex].count + coffee.count
      })
    }

    case ActionTypes.UPDATE_PRODUCT_QUANTITY_IN_CART_LIST: {
      const currentProductIndex = state.findIndex((product) => {
        return product.title === action.payload.coffeTitle
      })

      return produce(state, (draft) => {
        draft[currentProductIndex].count =
          action.payload.increment < 1
            ? 1 // não permite a quantidade do item ser menor que 1
            : action.payload.increment
      })
    }

    case ActionTypes.REMOVE_PRODUCT_IN_CART_LIST: {
      return state.filter(
        (coffee: ProductProps) => coffee.title !== action.payload.coffeTitle,
      )
    }

    case ActionTypes.RESET_CART_LIST: {
      return action.payload.data
    }
  }

  return state
}
