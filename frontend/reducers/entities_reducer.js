import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import stocksReducer from './stocks_reducer';
import assetsReducer from './assets_reducer';
import marketNewsReducer from './market_news_reducer';
import watchedAssetsReducer from './watched_assets_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  stocks: stocksReducer,
  assets: assetsReducer,
  watchedAssets: watchedAssetsReducer,
  marketNews: marketNewsReducer
});

export default entitiesReducer;