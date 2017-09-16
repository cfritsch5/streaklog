import { connect } from 'react-redux';
import AddEdit from './addedit';
import {postAchievement} from './addedit_actions';


const mapStateToProps = (state) => {
  // console.log(state);
  return {
    achievements: state.achievements,
    routines: state.routines,
    streaks: state.streaks,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    postAchievement: (achv)=> dispatch(postAchievement(achv))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddEdit);
