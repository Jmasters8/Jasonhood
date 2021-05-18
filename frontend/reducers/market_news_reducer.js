import { RECEIVE_MARKET_NEWS } from '../actions/stocks';


const marketNewsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_MARKET_NEWS:
      return action.news
    default:
      return state;
  }
}

export default marketNewsReducer;