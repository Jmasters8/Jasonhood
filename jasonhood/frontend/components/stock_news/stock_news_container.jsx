import StockNews from './stock_news';
import { connect } from 'react-redux';
import { fetchStockNews } from '../../actions/stocks';

const mapStateToProps = state => {
  return {
    stocks: state.entities.stocks
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchStockNews: (symbol, start, end) => dispatch(fetchStockNews(symbol, start, end))
})


export default connect(mapStateToProps, mapDispatchToProps)(StockNews);