import { connect } from 'react-redux';
import NewRoutine from './newroutine';
import {postNewAchievement} from './addedit_actions';


const mapStateToProps = (state) => {
  // console.log(state);
  return {
    achievements: state.achievements,
    routines: state.routines,
    streaks: state.streaks,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postNewAchievement: (achv)=> dispatch(postNewAchievement(achv))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewRoutine);
