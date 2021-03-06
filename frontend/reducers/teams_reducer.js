import merge from 'lodash/merge';

import {
  RECEIVE_TEAMS,
  RECEIVE_NEW_TEAM,
  REMOVE_TEAM_MEMBER,
  RECEIVE_TEAM
} from "../actions/team_actions";

const teamsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TEAMS:
      return action.teams;
    case RECEIVE_NEW_TEAM:
      return merge({}, state, {[action.newTeam.id]: action.newTeam});
    case RECEIVE_TEAM:
      return merge({}, state, {[action.team.id]: action.team});
    case REMOVE_TEAM_MEMBER:
      let newState = merge({}, state);
      delete newState[action.teams.left_team.id];
      return newState;
    default:
      return state;
  }
};

export default teamsReducer;
