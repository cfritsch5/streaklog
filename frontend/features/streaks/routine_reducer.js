import {merge} from 'lodash';

const defaultRoutines = {
  1: {name:"Yoga"},
  2: {name:"Take Vitamins"},
  3: {name:"Feed Dragon Charcoal"}
};

export const RoutineReducer = (state = defaultRoutines, action) => {
  // console.log("routine reducer");
  Object.freeze(state);
  switch(action.type) {
    case 'RECEIVE_STREAKS':
      return merge({}, action.routines);
    default:
      return state;
  }
};
export default RoutineReducer;
