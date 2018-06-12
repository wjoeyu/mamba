import * as APIUtil from  '../util/teams_api_util';

export const RECEIVE_CURRENT_TEAMS = 'RECEIVE_CURRENT_TEAMS';
export const RECEIVE_TEAM_MEMBERS = 'RECEIVE_TEAM_MEMBERS';
export const RECEIVE_TEAM_MEMBER = 'RECEIVE_TEAM_MEMBER';
export const RECEIVE_TEAM = 'RECEIVE_TEAM';
export const RECEIVE_NEW_TEAM = 'RECEIVE_NEW_TEAM';
export const RECEIVE_TEAM_ERRORS = 'RECEIVE_TEAM_ERRORS';
export const REMOVE_TEAM_MEMBER = 'REMOVE_TEAM_MEMBER';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';


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

export const receiveNewTeam = newTeam => {
  return {
    type: RECEIVE_NEW_TEAM,
    newTeam
  };
};

export const removeTeamMember = teams => {
  return {
    type: REMOVE_TEAM_MEMBER,
    teams
  };
};

export const receiveErrors = errors => ({
  type: RECEIVE_TEAM_ERRORS,
  errors
});

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

export const fetchTeam = (teamId) => dispatch => (
  APIUtil.getTeam(teamId).then(payload => (
    dispatch(receiveTeam(payload))
  ))
);

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
    dispatch(removeTeamMember(payload))
  ))
);

export const createTeam = (team) => dispatch => (
  APIUtil.createTeam(team).then(payload => (
    dispatch(receiveNewTeam(payload))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);
