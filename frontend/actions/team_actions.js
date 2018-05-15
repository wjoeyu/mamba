import * as APIUtil from  '../util/teams_api_util';

export const RECEIVE_CURRENT_TEAMS = 'RECEIVE_CURRENT_TEAMS';
export const RECEIVE_TEAM_MEMBERS = 'RECEIVE_TEAM_MEMBERS';
export const RECEIVE_TEAM_MEMBER = 'RECEIVE_TEAM_MEMBER';
export const RECEIVE_TEAM = 'RECEIVE_TEAM';
export const RECEIVE_NEW_TEAM = 'RECEIVE_NEW_TEAM';
export const RECEIVE_TEAM_ERRORS = 'RECEIVE_TEAM_ERRORS';


export const receiveCurrentTeams = currentTeams => {
  return {
    type: RECEIVE_CURRENT_TEAMS,
    currentTeams
  };
};

export const receiveTeamMembers = teamMembers => {
  return {
    type: RECEIVE_TEAM_MEMBERS,
    teamMembers
  };
};

export const receiveTeamMember = teamMember => {
  return {
    type: RECEIVE_TEAM_MEMBER,
    teamMember
  };
};

export const receiveTeam = team => {
  return {
    type: RECEIVE_TEAM,
    team
  };
};

// to be merged into state, not retrieved, just for info
export const receiveNewTeam = newTeam => {
  return {
    type: RECEIVE_NEW_TEAM,
    newTeam
  };
};

export const receiveErrors = errors => ({
  type: RECEIVE_TEAM_ERRORS,
  errors
});

export const fetchCurrentTeams = () => dispatch => (
  APIUtil.getUserTeams().then(payload => (
    dispatch(receiveCurrentTeams(payload))
  ))
);

export const fetchTeamMembers = (teamId) => dispatch => (
  APIUtil.getTeamMembers(teamId).then(payload => (
    dispatch(receiveTeamMembers(payload))
  ))
);

export const addTeamMember = (team) => dispatch => (
  APIUtil.addTeamMember(team).then(payload => (
    dispatch(receiveNewTeam(payload))
  ))
);

export const removeSelf = (teamId) => dispatch => (
  APIUtil.removeSelf(teamId).then(payload => (
    dispatch(receiveNewTeam(payload))
  ))
);

export const createTeam = (team) => dispatch => (
  APIUtil.createTeam(team).then(payload => (
    dispatch(receiveNewTeam(payload))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);
