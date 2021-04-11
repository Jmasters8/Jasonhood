import { connect } from 'react-redux';
import Graph from './graph'
import { logout } from '../../actions/session';
import { fetchStock, fetchStockInfo } from '../../actions/stocks';

const mapStateToProps = (state) => ({
  // stock: state.entities.stocks[ownProps.match.params.symbol]
});

const mapDispatchToProps = (dispatch) => ({
  fetchStock: symbol => dispatch(fetchStock(symbol)),
  fetchStockInfo: symbol => dispatch(fetchStockInfo(symbol))
});

export default connect(mapStateToProps, mapDispatchToProps)(Graph);