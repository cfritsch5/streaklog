import {merge} from 'lodash';

export const AddEditReducer = (state = {}, action) => {
  // console.log("streak reducer");
  Object.freeze(state);
  switch(action.type) {

    // case 'RECEIVE_ACHIEVEMENT':
    //   return merge({}, action);
    default:
      return state;
  }
};

export default AddEditReducer;
