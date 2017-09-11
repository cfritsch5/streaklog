import { connect } from 'react-redux';
import Today from './today';


const mapStateToProps = ({ today }) => {
  return {
    today
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Today);
