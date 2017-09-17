import { combineReducers } from 'redux';
import SessionReducer from './features/avatar/session/session_reducer';
import AchievementReducer from './features/streaks/achievement_reducer';
import RoutineReducer from './features/streaks/routine_reducer';
import StreakReducer from './features/streaks/streak_reducer';
// import AddEditReducer from './features/addedit/addedit_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  achievements: AchievementReducer,
  routines: RoutineReducer,
  streaks: StreakReducer
});

export default RootReducer;
