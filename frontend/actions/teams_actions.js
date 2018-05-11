import * as APIUtil from  '../util/teams_api_util';

export const RECEIVE_CURRENT_TEAMS = 'RECEIVE_CURRENT_TEAMS';

export const receiveCurrentTeams = currentTeams => {
  return {
    type: RECEIVE_CURRENT_TEAMS,
    currentTeams
  };
};

export const fetchCurrentTeams = () => dispatch => (
  APIUtil.getUserTeams.then(currentTeams => (
    dispatch(receiveCurrentTeams(currentTeams))
  ))
);
