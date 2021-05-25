import { RECEIVE_WATCHED_ASSET, REMOVE_WATCHED_ASSET } from '../actions/assets';
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session';

const watchedAssetsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  
  console.log(nextState)

  switch (action.type) {
    case RECEIVE_WATCHED_ASSET:
      nextState[action.watchedAsset.id] = action.watchedAsset
      return nextState;
    case REMOVE_WATCHED_ASSET:
      delete nextState[action.assetId.id]
      return nextState;
    case RECEIVE_CURRENT_USER:
      return action.watchedAssets || state
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
}

export default watchedAssetsReducer;