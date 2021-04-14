import { RECEIVE_STOCK, RECEIVE_STOCK_DATA, RECEIVE_STOCK_NEWS} from '../actions/stocks';


const stocksReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state)

  switch(action.type) {
    case RECEIVE_STOCK:
      return Object.assign({}, state, { [action.symbol]: action.stock });
    case RECEIVE_STOCK_DATA:
      nextState[action.symbol].data = action.data
      return nextState
    case RECEIVE_STOCK_NEWS:
      nextState[action.symbol].news = action.news
      return nextState
    default:
      return state;
  }
}

export default stocksReducer;