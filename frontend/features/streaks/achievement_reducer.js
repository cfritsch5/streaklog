import {merge} from 'lodash';

const defaultAchievements = Object.freeze({
  2: {name: 'Take Vitamins'},
  3:{name: 'Fed Vitamins (The Dragon)'},
  4: {name:'Work Out'},
  1: {name: 'Did yoga'}
});

export const AchievementReducer = (state = defaultAchievements, action) => {
  // console.log("achievement reducer");
  Object.freeze(state);
  switch(action.type) {
    case 'RECEIVE_STREAKS':
      return merge({}, action.achievements);
    case 'RECEIVE_ACHIEVEMENT':
      return merge({}, action.achievements);
    default:
      return state;
  }
};
export default AchievementReducer;
