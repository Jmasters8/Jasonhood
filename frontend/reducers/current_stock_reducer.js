import { RECEIVE_CURRENT_STOCK } from '../actions/stocks';

const initialState = {
  currentStock: {}
}

const currentStockReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_CURRENT_STOCK:
      // nextState.currentStock = action.symbol
      nextState[action.symbol] = action.stock
      return nextState
    default:
      return state;
  }
}

export default currentStockReducer;