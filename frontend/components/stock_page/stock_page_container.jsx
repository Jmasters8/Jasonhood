import Stock from './stock_page'
import { connect } from 'react-redux';
import { fetchStock, fetchStockInfo, fetchStockInfoTest, fetchStockData, fetchStockNews } from '../../actions/stocks';
import { addStockAsset } from '../../actions/assets';
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
    assets: state.entities.assets
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchStock: symbol => dispatch(fetchStock(symbol)),
  fetchStockInfo: symbol => dispatch(fetchStockInfo(symbol)),
  // fetchStockInfoTest: symbol => dispatch(fetchStockInfoTest(symbol)),
  fetchStockData: (symbol, start, end) => dispatch(fetchStockData(symbol, start, end)),
  fetchStockNews: (symbol, start, end) => dispatch(fetchStockNews(symbol, start, end)),
  addStockAsset: (ticker, userId, amount, price) => dispatch(addStockAsset(ticker, userId, amount, price)),
  updateBuyingPower: (buyingPower, id) => dispatch(updateBuyingPower(buyingPower, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Stock);