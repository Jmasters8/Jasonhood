import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import stocksReducer from './stocks_reducer';
import assetsReducer from './assets_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  stocks: stocksReducer,
  assets: assetsReducer
});

export default entitiesReducer;