import { RECEIVE_STOCK } from '../actions/stocks';


const stocksReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_STOCK:
      return Object.assign({}, state, { [action.stock.id]: action.stock });
    default:
      return state;
  }
}

export default stocksReducer;