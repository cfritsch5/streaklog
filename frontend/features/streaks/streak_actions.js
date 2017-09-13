export const receiveStreaks = achvsAndRoutines => ({
  type: 'RECEIVE_STREAKS',
  routines: achvsAndRoutines.routines,
  achievements: achvsAndRoutines.achievements
});

export const receiveErrors = errors => ({
  type: 'RECEIVE_ERRORS',
  errors
});

export const getAchvsAndRoutines = () => dispatch => (
  apiGetAchvsAndRoutines().then(achvsAndRoutines => (
    dispatch(receiveStreaks(achvsAndRoutines))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const apiGetAchvsAndRoutines = userId => {
  return $.ajax({
    method: 'GET',
    url: '/api/achievements',
  });
};
