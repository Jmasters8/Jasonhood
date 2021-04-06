import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom'
import { signup } from '../../actions/session';
import SignupForm from './signup_form';



const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'signup',
  navLink: <Link to="/login">Log in to complete your application</Link>
})

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);