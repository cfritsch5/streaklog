import { connect } from 'react-redux';
import Streaks from './streaks';
import {getAchvsAndRoutines} from './streak_actions';


const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
    streaks: state.streaks,
    achievements: state.achievements,
    routines: state.routines
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAchvsAndRoutines: ()=> dispatch(getAchvsAndRoutines())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Streaks);
