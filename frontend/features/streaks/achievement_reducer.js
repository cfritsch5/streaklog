import {merge} from 'lodash';

const DummyStreaks = Object.freeze({
  'Take Vitamins': 10,
  'Take Medication': 8,
  'Work Out': 6
});

export const AchievementReducer = (state = {}, action) => {
  console.log("achievement reducer");
  Object.freeze(state);
  switch(action.type) {
    case 'RECEIVE_STREAKS':
      return merge({}, action.achievements);
    default:
      return state;
  }
};
export default AchievementReducer;
