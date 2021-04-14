import { connect } from 'react-redux';
import GraphTwo from './graph_2'
import { logout } from '../../actions/session';
import { fetchStock, fetchStockInfo } from '../../actions/stocks';

const mapStateToProps = (state, ownProps) => ({
  stock: ownProps.stock,
  data: ownProps.stock.data
});

const mapDispatchToProps = (dispatch) => ({
  fetchStock: symbol => dispatch(fetchStock(symbol)),
  fetchStockInfo: symbol => dispatch(fetchStockInfo(symbol))
});

export default connect(mapStateToProps, mapDispatchToProps)(GraphTwo);