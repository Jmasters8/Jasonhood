import React from 'react';
import { connect } from 'react-redux';
import MainPage from './main_page';
import { logout } from '../../actions/session';
import { fetchStock } from '../../actions/stocks';
import { updateBuyingPower } from '../../actions/users'


const mapStateToProps = (state) => ({
  user: state.entities.users[state.session.id]
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchStock: symbol => dispatch(fetchStock(symbol)),
  updateBuyingPower: (buyingPower, id) => dispatch(updateBuyingPower(buyingPower, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);