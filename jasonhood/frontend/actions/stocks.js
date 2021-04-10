import * as StockAPIUtil from '../util/stock_api_util'

export const RECEIVE_STOCK = 'RECEIVE_STOCK';


export const receiveStock = (stock, symbol) => ({
  type: RECEIVE_STOCK,
  stock, 
  symbol
});


export const fetchStock = symbol => dispatch => (
  StockAPIUtil.fetchStock(symbol).then((stock) => (dispatch(receiveStock(stock, symbol))))
);

export const fetchStockInfo = symbol => dispatch => (
  StockAPIUtil.fetchStockInfo(symbol).then((stock) => dispatch(receiveStock(stock, symbol)))
);
