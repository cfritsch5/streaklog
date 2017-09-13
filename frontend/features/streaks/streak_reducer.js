import {merge} from 'lodash';

const DummyStreaks = Object.freeze({
  'Take Vitamins': 10,
  'Take Medication': 8,
  'Work Out': 6
});

export const AchievementReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case 'RECEIVE_STREAKS':
      return merge({}, action.streaks);
    default:
      return state;
  }
};
export default AchievementReducer;
export const RoutineReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case 'RECEIVE_STREAKS':
      return merge({}, action.routines);
    default:
      return state;
  }
};

export const StreakReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case 'RECEIVE_STREAKS':
      let streaks;
      return merge({}, streaks);
    default:
      return state;
  }
};
