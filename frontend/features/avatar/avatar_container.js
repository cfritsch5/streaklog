import { connect } from 'react-redux';
import Avatar from './avatar';
import {logout} from './session/session_actions';


const mapStateToProps = ({ session, avatar }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    currentUser: session.currentUser,
    avatar
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Avatar);
