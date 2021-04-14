import Stock from './stock_page'
import { connect } from 'react-redux';
import { fetchStock, fetchStockInfo, fetchStockInfoTest, fetchStockData } from '../../actions/stocks';


const mapStateToProps = (state, ownProps) => {
  const stock = state.entities.stocks[ownProps.match.params.symbol]
  const data = stock ? stock.data : undefined
  return {
    stock: stock,
    data: data
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchStock: symbol => dispatch(fetchStock(symbol)),
  fetchStockInfo: symbol => dispatch(fetchStockInfo(symbol)),
  // fetchStockInfoTest: symbol => dispatch(fetchStockInfoTest(symbol)),
  fetchStockData: (symbol, start, end) => dispatch(fetchStockData(symbol, start, end))
});

export default connect(mapStateToProps, mapDispatchToProps)(Stock);