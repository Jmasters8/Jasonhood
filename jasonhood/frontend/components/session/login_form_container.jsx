import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session';
import LoginForm from './login_form'



const mapStateToProps = (state) => ({
  errors: state.errors.session,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)