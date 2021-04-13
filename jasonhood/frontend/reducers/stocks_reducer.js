import { RECEIVE_STOCK, RECEIVE_STOCK_DATA } from '../actions/stocks';


const stocksReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_STOCK:
      return Object.assign({}, state, { [action.symbol]: action.stock });
    case RECEIVE_STOCK_DATA:
      const nextState = Object.assign({}, state)
      nextState[action.symbol].data = action.data
      return nextState
    default:
      return state;
  }
}

export default stocksReducer;