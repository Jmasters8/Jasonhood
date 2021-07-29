import React from 'react';
import { connect } from 'react-redux';
import MainPage from './main_page';
import { logout } from '../../actions/session';
import { fetchStock, fetchStockData, fetchMarketNews, fetchCurrentStock, resetCurrentStock } from '../../actions/stocks';
import { updateBuyingPower } from '../../actions/users'
import { addWatchedAsset, updateWatchedAsset, deleteWatchedAsset, deleteStockAsset } from '../../actions/assets';


const mapStateToProps = (state) => ({
  user: state.entities.users[state.session.id],
  assets: state.entities.assets,
  stocks: state.entities.stocks,
  marketNews: state.entities.marketNews,
  watchedAssets: state.entities.watchedAssets,
  currentUserId: state.session.id,
  currentStock: state.currentStock.stock
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchStock: symbol => dispatch(fetchStock(symbol)),
  fetchCurrentStock: symbol => dispatch(fetchCurrentStock(symbol)),
  resetCurrentStock: () => dispatch(resetCurrentStock()),
  deleteStockAsset: (ownerId, assetId) => dispatch(deleteStockAsset(ownerId, assetId)),
  updateBuyingPower: (buyingPower, id) => dispatch(updateBuyingPower(buyingPower, id)),
  addWatchedAsset: (ticker, userId, price, category, emoji) => dispatch(addWatchedAsset(ticker, userId, price, category, emoji)),
  updateWatchedAsset: (emoji, category, watchedAssetId) => dispatch(updateWatchedAsset(emoji, category, watchedAssetId)),
  deleteWatchedAsset: (watcherId, assetId) => dispatch(deleteWatchedAsset(watcherId, assetId)),
  fetchStockData: (symbol, start, end) => dispatch(fetchStockData(symbol, start, end)),
  fetchMarketNews: () => dispatch(fetchMarketNews())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);