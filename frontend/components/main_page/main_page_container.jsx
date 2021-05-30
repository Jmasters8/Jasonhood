import React from 'react';
import { connect } from 'react-redux';
import MainPage from './main_page';
import { logout } from '../../actions/session';
import { fetchStock, fetchStockData, fetchMarketNews, fetchCurrentStock } from '../../actions/stocks';
import { updateBuyingPower } from '../../actions/users'
import { addWatchedAsset, updateWatchedAsset, deleteWatchedAsset } from '../../actions/assets';


const mapStateToProps = (state) => ({
  user: state.entities.users[state.session.id],
  assets: state.entities.assets,
  stocks: state.entities.stocks,
  marketNews: state.entities.marketNews,
  watchedAssets: state.entities.watchedAssets,
  currentUserId: state.session.id
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchStock: symbol => dispatch(fetchStock(symbol)),
  fetchCurrentStock: symbol => dispatch(fetchCurrentStock(symbol)),
  updateBuyingPower: (buyingPower, id) => dispatch(updateBuyingPower(buyingPower, id)),
  addWatchedAsset: (ticker, userId, price, category, emoji) => dispatch(addWatchedAsset(ticker, userId, price, category, emoji)),
  updateWatchedAsset: (emoji, category, watchedAssetId) => dispatch(updateWatchedAsset(emoji, category, watchedAssetId)),
  deleteWatchedAsset: (watcherId, assetId) => dispatch(deleteWatchedAsset(watcherId, assetId)),
  fetchStockData: (symbol, start, end) => dispatch(fetchStockData(symbol, start, end)),
  fetchMarketNews: () => dispatch(fetchMarketNews())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);