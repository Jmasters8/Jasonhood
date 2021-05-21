import { RECEIVE_STOCK_ASSET, REMOVE_STOCK_ASSET, UPDATE_STOCK_ASSET } from '../actions/assets';
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session';



const assetsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_STOCK_ASSET:
      // nextState[action.stock.ticker] = action.stock;
      nextState[action.asset.id] = action.asset
      return nextState;
    case UPDATE_STOCK_ASSET:
      nextState[action.payload.id].amount = action.amount
      return nextState;
    case REMOVE_STOCK_ASSET: 
      delete nextState[action.assetId]
      return nextState
    case RECEIVE_CURRENT_USER:
      return action.assets || state
    case LOGOUT_CURRENT_USER:
        return {}
    default:
      return state
  }
}

export default assetsReducer;