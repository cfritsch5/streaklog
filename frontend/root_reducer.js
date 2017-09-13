import { combineReducers } from 'redux';
import SessionReducer from './features/avatar/session/session_reducer';
import AchievementsReducer from './features/streaks/streak_reducer';
import RoutinesReducer from './features/streaks/streak_reducer';
import StreaksReducer from './features/streaks/streak_reducer';
// import {
//         RoutinesReducer,
//         StreaksReducer
//         } from './features/streaks/streak_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  achievements: AchievementsReducer,
  routines: RoutinesReducer,
  streaks: StreaksReducer
});

export default RootReducer;
