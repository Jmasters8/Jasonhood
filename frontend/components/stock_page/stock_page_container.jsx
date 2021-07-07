import Stock from './stock_page'
import { connect } from 'react-redux';
import { fetchStock, fetchStockInfo, fetchCurrentStock, fetchStockData, fetchStockNews } from '../../actions/stocks';
import { addStockAsset, updateStockAmount, deleteStockAsset, addWatchedAsset } from '../../actions/assets';
import { updateBuyingPower } from '../../actions/users'


const mapStateToProps = (state, ownProps) => {
  const stock = state.entities.stocks[ownProps.match.params.symbol]
  const data = stock ? stock.data : undefined
  const news = stock ? stock.news : undefined
  return {
    stock: stock,
    data: data,
    currentUser: state.entities.users[state.session.id],
    news,
    assets: state.entities.assets,
    watchedAssets: state.entities.watchedAssets,
    currentStock: state.currentStock,
    watchLists: state.entities.watchedAssets,
    stocks: state.entities.stocks
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchStock: symbol => dispatch(fetchStock(symbol)),
  fetchStockInfo: symbol => dispatch(fetchStockInfo(symbol)),
  fetchStockData: (symbol, start, end) => dispatch(fetchStockData(symbol, start, end)),
  fetchStockNews: (symbol, start, end) => dispatch(fetchStockNews(symbol, start, end)),
  fetchCurrentStock: (symbol) => dispatch(fetchCurrentStock(symbol)),
  addStockAsset: (ticker, userId, amount, price) => dispatch(addStockAsset(ticker, userId, amount, price)),
  addWatchedAsset: (ticker, userId, price, category, emoji) => dispatch(addWatchedAsset(ticker, userId, price, category, emoji)),
  updateStockAmount: (amount, assetId) => dispatch(updateStockAmount(amount, assetId)),
  deleteStockAsset: (ownerId, assetId) => dispatch(deleteStockAsset(ownerId, assetId)),
  updateBuyingPower: (buyingPower, id) => dispatch(updateBuyingPower(buyingPower, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Stock);