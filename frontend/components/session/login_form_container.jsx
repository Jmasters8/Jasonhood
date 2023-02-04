import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session';
import LoginForm from './login_form'

const mapStateToProps = (state) => ({
  loginErrors: state.errors.session,
  currentUser: state.session.currentUser,
  state: state
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)