import { connect } from 'react-redux';
import NewAchievement from './newachievement';
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
)(NewAchievement);
