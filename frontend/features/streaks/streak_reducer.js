import {merge} from 'lodash';

const defaultStreaks = {
  0: {achv:2, rtn:2, days: 5},
  1: {achv:3, rtn:3, days: 8},
  2: {achv:1, rtn:1, days: 4},
};

export const StreakReducer = (state = defaultStreaks, action) => {
  // console.log("streak reducer");
  Object.freeze(state);
  switch(action.type) {

    case 'RECEIVE_STREAKS':
      return merge({}, action.streaks);
    case 'RECEIVE_ACHIEVEMENT':
      return merge({}, action.streaks);
    default:
      return state;
  }
};

export default StreakReducer;
