import Stock from './stock_page'
import { connect } from 'react-redux';
import { fetchStock, fetchStockInfo, fetchStockInfoTest, fetchStockData } from '../../actions/stocks';


const mapStateToProps = (state, ownProps) => ({
  stock: state.entities.stocks[ownProps.match.params.symbol],
  data: state.entities.stocks[ownProps.match.params.symbol]
});

const mapDispatchToProps = (dispatch) => ({
  fetchStock: symbol => dispatch(fetchStock(symbol)),
  fetchStockInfo: symbol => dispatch(fetchStockInfo(symbol)),
  // fetchStockInfoTest: symbol => dispatch(fetchStockInfoTest(symbol)),
  fetchStockData: symbol => dispatch(fetchStockData(symbol))
});

export default connect(mapStateToProps, mapDispatchToProps)(Stock);