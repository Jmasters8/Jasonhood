import * as AssetAPIUtil from '../util/asset_api_util';
import { receiveCurrentUser } from './session'


export const RECEIVE_STOCK_ASSET = 'RECEIVE_ASSET';
export const REMOVE_STOCK_ASSET = 'REMOVE_STOCK_ASSET';
export const UPDATE_STOCK_ASSET = 'UPDATE_STOCK_ASSET';
export const RECEIVE_WATCHED_ASSET = 'RECEIVE_WATCHED_ASSET';
export const REMOVE_WATCHED_ASSET = 'REMOVE_WATCHED_ASSET';

const receiveStockAsset = (asset, ticker) => ({
  type: RECEIVE_STOCK_ASSET,
  asset, 
  ticker
});

const updateStockAsset = (amount, asset) => ({
  type: UPDATE_STOCK_ASSET,
  amount,
  asset
})

const removeStockAsset = (assetId) => ({
  type: REMOVE_STOCK_ASSET,
  assetId
});

const receiveWatchedAsset = (watchedAsset, ticker) => ({
  type: RECEIVE_WATCHED_ASSET,
  watchedAsset,
  ticker
})

const removeWatchedAsset = (assetId) => ({
  type: REMOVE_WATCHED_ASSET,
  assetId
})

export const addStockAsset = (ticker, ownerId, amount, price) => dispatch => (
  AssetAPIUtil.addStockAsset(ticker, ownerId, amount, price).then((stock) => { 
    dispatch(receiveStockAsset(stock, ticker))
  })
)

export const updateStockAmount = (amount, assetId) => dispatch => (
  AssetAPIUtil.updateStockAsset(amount, assetId).then((amount, asset) => {
    dispatch(updateStockAsset(amount, asset))
  })
)

export const deleteStockAsset = (ownerId, assetId) => dispatch => (
  AssetAPIUtil.deleteStockAsset(ownerId, assetId).then(assetId => dispatch(removeStockAsset(assetId)))
  
)

export const addWatchedAsset = (ticker, ownerId, price, category, emoji) => dispatch => (
  AssetAPIUtil.addWatchedAsset(ticker, ownerId, price, category, emoji).then(watchedAsset => {
    dispatch(receiveWatchedAsset(watchedAsset, ticker))
  })
)

export const deleteWatchedAsset = (watcherId, assetId) => dispatch => (
  AssetAPIUtil.deleteWatchedAsset(watcherId, assetId).then(assetId => {
    dispatch(removeWatchedAsset(assetId))
  })
)
