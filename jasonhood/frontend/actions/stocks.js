import * as StockAPIUtil from '../util/stock_api_util'

export const RECEIVE_STOCK = 'RECEIVE_STOCK';


export const receiveStock = stock => ({
  type: RECEIVE_STOCK,
  stock
});


export const fetchStock = symbol => dispatch => (
  StockAPIUtil.fetchStock(symbol).then(stock => (dispatch(receiveStock(stock))))
);
