import {merge} from 'lodash';


export const RoutineReducer = (state = {}, action) => {
  console.log("routine reducer");
  Object.freeze(state);
  switch(action.type) {
    case 'RECEIVE_STREAKS':
      return merge({}, action.routines);
    default:
      return state;
  }
};
export default RoutineReducer;
