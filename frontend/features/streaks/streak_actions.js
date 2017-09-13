export const receiveStreaks = achvsAndRoutines => ({
  type: 'RECEIVE_STREAKS',
  routines: achvsAndRoutines.routines,
  achievements: achvsAndRoutines.achievements,
  streaks: achvsAndRoutines.streaks
});

export const receiveStreakErrors = errors => ({
  type: 'RECEIVE_STREAK_ERRORS',
  errors
});

export const getAchvsAndRoutines = () => dispatch => (
  apiGetAchvsAndRoutines().then(achvsAndRoutines => (
    dispatch(receiveStreaks(achvsAndRoutines))
  ), err => (
    dispatch(receiveStreakErrors(err.responseJSON))
  ))
);

export const apiGetAchvsAndRoutines = userId => {
  return $.ajax({
    method: 'GET',
    url: '/api/achievements',
  });
};
