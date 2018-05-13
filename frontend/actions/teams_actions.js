import * as APIUtil from  '../util/teams_api_util';

export const RECEIVE_CURRENT_TEAMS = 'RECEIVE_CURRENT_TEAMS';
export const RECEIVE_TEAM_MEMBERS = 'RECEIVE_TEAM_MEMBERS';

export const receiveCurrentTeams = currentTeams => {
  return {
    type: RECEIVE_CURRENT_TEAMS,
    currentTeams
  };
};

export const receieveTeamMembers = teamMembers => {
  return {
    type: RECEIVE_TEAM_MEMBERS,
    teamMembers
  };
};

export const fetchCurrentTeams = () => dispatch => (
  APIUtil.getUserTeams().then(payload => (
    dispatch(receiveCurrentTeams(payload))
  ))
);

export const fetchTeamMembers = (id) => dispatch => (
  APIUtil.getTeamMembers(id).then(payload => (
    dispatch(receiveTeamMembers(payload))
  ))
);
