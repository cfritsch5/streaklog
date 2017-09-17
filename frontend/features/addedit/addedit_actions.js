export const receiveAchievement = achvsAndRoutines => ({
  type: 'RECEIVE_ACHIEVEMENT',
  routines: achvsAndRoutines.routines,
  achievements: achvsAndRoutines.achievements,
  streaks: achvsAndRoutines.streaks
});

export const receiveStreakErrors = errors => ({
  type: 'RECEIVE_STREAK_ERRORS',
  errors
});

export const postAchievement = (achv) => dispatch => (
  apiPostAchievement(achv).then(achvsAndRoutines => (
    dispatch(receiveAchievement(achvsAndRoutines))
  ), err => (
    dispatch(receiveStreakErrors(err.responseJSON))
  ))
);
export const postNewAchievement = (achv) => dispatch => (
  apiPostNewAchievement(achv).then(achvsAndRoutines => (
    dispatch(receiveAchievement(achvsAndRoutines))
  ), err => (
    dispatch(receiveStreakErrors(err.responseJSON))
  ))
);

export const apiPostAchievement = (streak_id, user_id) => {
  return $.ajax({
    method: 'POST',
    url: '/api/achievements',
    data: {achievement: {streak_id, user_id}}
  });
};
export const apiPostNewAchievement = (name, user_id) => {
  return $.ajax({
    method: 'POST',
    url: '/api/achievements',
    data: {achievement: {name, user_id}}
  });
};
