import { connect } from 'react-redux';
import Streaks from './streaks';


const mapStateToProps = ({ streaks }) => {
  return {
    streaks
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Streaks);
