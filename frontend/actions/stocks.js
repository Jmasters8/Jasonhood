import * as StockAPIUtil from '../util/stock_api_util'

export const RECEIVE_STOCK = 'RECEIVE_STOCK';
export const RECEIVE_CURRENT_STOCK = 'RECEIVE_CURRENT_STOCK';
export const RECEIVE_STOCK_DATA = "RECEIVE_STOCK_DATA"
export const RECEIVE_STOCK_NEWS = 'RECEIVE_STOCK_NEWS'
export const RECEIVE_MARKET_NEWS = 'RECEIVE_MARKET_NEWS'
export const RESET_CURRENT_STOCK = 'RESET_CURRENT_STOCK'

export const receiveStock = (stock, symbol) => ({
  type: RECEIVE_STOCK,
  stock, 
  symbol
});

export const receiveCurrentStock = (stock, symbol) => ({
  type: RECEIVE_CURRENT_STOCK,
  stock,
  symbol
})

export const receiveStockData = (data, symbol) => ({
  type: RECEIVE_STOCK_DATA,
  data,
  symbol
});

export const receiveStockNews = (news, symbol) => ({
  type: RECEIVE_STOCK_NEWS,
  news,
  symbol
})

export const receiveMarketNews = news => ({
  type: RECEIVE_MARKET_NEWS,
  news
})

export const resetStock = () => ({
  type: RESET_CURRENT_STOCK
})

export const fetchStock = symbol => dispatch => (
  StockAPIUtil.fetchStock(symbol).then((stock) => (dispatch(receiveStock(stock, symbol))))
);

export const fetchCurrentStock = symbol => dispatch => (
  StockAPIUtil.fetchStock(symbol).then((stock) => (dispatch(receiveCurrentStock(stock, symbol))))
);


export const fetchStockInfo = symbol => dispatch => (
  StockAPIUtil.fetchStockInfo(symbol).then((stock) => dispatch(receiveStock(stock, symbol)))
);

// export const fetchStockInfoTest = symbol => dispatch => (
//   StockAPIUtil.fetchStockInfoTest(symbol).then((stock) => dispatch(receiveStock(stock, symbol)))
// );

export const fetchStockData = (symbol, start, end) => dispatch => (
  StockAPIUtil.fetchStockData(symbol, start, end).then((stock) => dispatch(receiveStockData(stock, symbol)))
);

export const fetchStockNews = (symbol, start, end) => dispatch => (
  StockAPIUtil.fetchStockNews(symbol, start, end).then((stock) => dispatch(receiveStockNews(stock, symbol)))
)

export const fetchMarketNews = () => dispatch => (
  StockAPIUtil.fetchMarketNews().then(news => dispatch(receiveMarketNews(news)))
)

export const resetCurrentStock = () => dispatch => (
  StockAPIUtil.resetCurrentStock().then(() => dispatch(resetStock()))
)