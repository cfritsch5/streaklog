import { connect } from 'react-redux';
import Avatar from './avatar';


const mapStateToProps = ({ avatar }) => {
  return {
    avatar
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Avatar);
