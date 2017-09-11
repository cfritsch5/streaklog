import {merge} from 'lodash';

const DummyStreaks = Object.freeze({
  'Take Vitamins': 10,
  'Take Medication': 8,
  'Work Out': 6
});

const SessionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case 'DUMMY_STREAKS':
      return merge({}, DummyStreaks);
    case 'RECEIVE_STREAKS':
      return merge({}, action.streaks);
    case 'RECEIVE_STREAK':
      return merge({}, state, action.streak);
    default:
      return state;
  }
};

export default SessionReducer;
