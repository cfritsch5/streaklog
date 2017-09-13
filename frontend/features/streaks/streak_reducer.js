import {merge} from 'lodash';


export const StreakReducer = (state = {}, action) => {
  console.log("streak reducer");
  Object.freeze(state);
  switch(action.type) {

    case 'RECEIVE_STREAKS':
      return merge({}, action.streaks);
    default:
      return state;
  }
};

export default StreakReducer;
