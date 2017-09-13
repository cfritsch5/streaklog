import { connect } from 'react-redux';
import AddEdit from './addedit';


const mapStateToProps = (state) => {
  return {
    routines: state.routines
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddEdit);
