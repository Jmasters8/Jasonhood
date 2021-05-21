import * as AssetAPIUtil from '../util/asset_api_util';


export const RECEIVE_STOCK_ASSET = 'RECEIVE_ASSET';
export const REMOVE_STOCK_ASSET = 'REMOVE_STOCK_ASSET';
export const UPDATE_STOCK_ASSET = 'UPDATE_STOCK_ASSET'

const receiveStockAsset = (asset, ticker) => ({
  type: RECEIVE_STOCK_ASSET,
  asset, 
  ticker
});

const updateStockAsset = (payload, amount) => ({
  type: UPDATE_STOCK_ASSET,
  payload,
  amount
})

const removeStockAsset = (assetId) => ({
  type: REMOVE_STOCK_ASSET,
  assetId
});



export const addStockAsset = (ticker, ownerId, amount, price) => dispatch => (
  AssetAPIUtil.addStockAsset(ticker, ownerId, amount, price).then((stock) => { 
    dispatch(receiveStockAsset(stock, ticker))
  })
)

export const updateStockAmount = (amount, assetId) => dispatch => (
  AssetAPIUtil.updateStockAsset(amount, assetId).then((asset, assetId) => {
    dispatch(updateStockAsset(asset, assetId))
  })
)

export const deleteStockAsset = (ownerId, assetId) => dispatch => (
  AssetAPIUtil.deleteStockAsset(ownerId, assetId).then(assetId => dispatch(removeStockAsset(assetId)))
)