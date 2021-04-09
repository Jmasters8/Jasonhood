import React from 'react';
import { connect } from 'react-redux';
import MainPage from './main_page';
import { logout } from '../../actions/session';
import { fetchStock } from '../../actions/stocks';


const mapStateToProps = (state) => ({
  user: state.entities.users
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchStock: symbol => dispatch(fetchStock(symbol))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);