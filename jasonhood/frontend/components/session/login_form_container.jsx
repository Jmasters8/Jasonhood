import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session';
import LoginForm from './login_form'



const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'login',
  navLink: <Link to="/signup">sign up</Link>
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)