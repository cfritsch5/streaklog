import {merge} from 'lodash';

const defaultRoutines = {
  1: {name:"Yoga", streak_id: 1},
  2: {name:"Take Vitamins", streak_id:0},
  3: {name:"Feed Dragon Charcoal",streak_id:1}
};

export const RoutineReducer = (state = defaultRoutines, action) => {
  // console.log("routine reducer");
  Object.freeze(state);
  switch(action.type) {
    case 'RECEIVE_CURRENT_USER':
      return merge({}, defaultRoutines);

    case 'RECEIVE_STREAKS':
      return merge({}, action.routines);
    case 'RECEIVE_ACHIEVEMENT':
      return merge({}, action.routines);
    default:
      return state;
  }
};
export default RoutineReducer;
