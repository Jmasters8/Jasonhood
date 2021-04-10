import Stock from './stock_page'
import { connect } from 'react-redux';
import { fetchStock, fetchStockInfo } from '../../actions/stocks';


const mapStateToProps = (state, ownProps) => ({
  stock: state.entities.stocks[ownProps.match.params.symbol]
});

const mapDispatchToProps = (dispatch) => ({
  fetchStock: symbol => dispatch(fetchStock(symbol)),
  fetchStockInfo: symbol => dispatch(fetchStockInfo(symbol))
});

export default connect(mapStateToProps, mapDispatchToProps)(Stock);