import * as AssetAPIUtil from '../util/asset_api_util';


export const RECEIVE_STOCK_ASSET = 'RECEIVE_ASSET';

const receiveStockAsset = (asset, ticker) => ({
  type: RECEIVE_STOCK_ASSET,
  asset, 
  ticker
});

export const addStockAsset = (ticker, ownerId, amount, price) => dispatch => (
  AssetAPIUtil.addStockAsset(ticker, ownerId, amount, price).then((stock) => { 
    dispatch(receiveStockAsset(stock, ticker))
  })
)