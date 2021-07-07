import { RECEIVE_CURRENT_STOCK, RESET_CURRENT_STOCK } from '../actions/stocks';

const initialState = {
  currentStock: {}
}

const currentStockReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_CURRENT_STOCK:
      nextState['stock'] = action.symbol
      return nextState
    case RESET_CURRENT_STOCK:
      nextState['stock'] = "None"
      return nextState
    default:
      return state;
  }
}

export default currentStockReducer;