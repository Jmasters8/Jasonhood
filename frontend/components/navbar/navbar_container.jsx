import { connect } from 'react-redux';
import Navbar from './navbar';
import { logout } from '../../actions/session';
import { withRouter } from 'react-router-dom';
import { fetchCurrentStock, fetchStockInfo, fetchStockData } from '../../actions/stocks';


const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  stocks: state.entities.stocks
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchCurrentStock: symbol => dispatch(fetchCurrentStock(symbol)),
  fetchStockInfo: symbol => dispatch(fetchStockInfo(symbol)),
  fetchStockData: (symbol, start, end) => dispatch(fetchStockData(symbol, start, end))
});

export default (withRouter(
  connect(
      mapStateToProps,
      mapDispatchToProps
  )(Navbar))
);