import Stock from './stock_page'
import { connect } from 'react-redux';
import { fetchStock } from '../../actions/stocks';


const mapStateToProps = (state) => ({
  stock: state.entities.stocks
});

const mapDispatchToProps = (dispatch) => ({
  fetchStock: symbol => dispatch(fetchStock(symbol))
});

export default connect(mapStateToProps, mapDispatchToProps)(Stock);