import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_TEAMS,
  RECEIVE_NEW_TEAM,
  REMOVE_TEAM_MEMBER} from "../actions/team_actions";

const teamsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_TEAMS:
      return action.currentTeams;
    case RECEIVE_NEW_TEAM:
      return merge({}, state, {[action.newTeam.id]: action.newTeam});
    case REMOVE_TEAM_MEMBER:
      let newState = merge({}, state);
      delete newState[action.teams.left_team.id];
      return newState;
    default:
      return state;
  }
};

export default teamsReducer;
