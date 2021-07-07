import { connect } from 'react-redux';
import HomePage from './home_page';
import { logout } from '../../actions/session';

const mapStateToProps = state => ({
  currentUser: state.session.id,
  user: state.entities.users
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);