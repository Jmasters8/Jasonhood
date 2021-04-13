import { connect } from 'react-redux';
import Navbar from './navbar';
import { logout } from '../../actions/session';
import { withRouter } from 'react-router-dom';


const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default (withRouter(
  connect(
      mapStateToProps,
      mapDispatchToProps
  )(Navbar))
);
// export default connect(mapStateToProps, mapDispatchToProps)(withRouter)(Navbar);