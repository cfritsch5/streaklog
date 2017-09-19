import {merge} from 'lodash';

const defaultStreaks = {
  0: {name: "Take Vitamins", achievement:2, routine:2, currentStreak: 5},
  1: {name: "Fed Vitamins (The Dragon)", achievement:3, routine:3, currentStreak: 8},
  2: {name: "Do Yoga", achievement:1, routine:1, currentStreak: 4},
};

export const StreakReducer = (state = defaultStreaks, action) => {
  // console.log("streak reducer");
  Object.freeze(state);
  switch(action.type) {
    case 'RECEIVE_CURRENT_USER':
      return merge({}, defaultStreaks);

    case 'RECEIVE_STREAKS':
      return merge({}, action.streaks);
    case 'RECEIVE_ACHIEVEMENT':
      return merge({}, action.streaks);
    default:
      return state;
  }
};

export default StreakReducer;
