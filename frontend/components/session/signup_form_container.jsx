import { connect } from 'react-redux';
import React from 'react';
import { signup, clearErrors } from '../../actions/session';
import SignupForm from './signup_form';



const mapStateToProps = ({ errors }) => ({
  signupErrors: errors.session,
  formType: 'signup',
})

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);