import { connect } from 'react-redux';
import Today from './today';


const mapStateToProps = ({ achievements }) => {
  return {
    achievements: achievements
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Today);
