import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_TEAMS,
  RECEIVE_NEW_TEAM } from "../actions/team_actions";

const teamsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_TEAMS:
      return action.currentTeams;
    case RECEIVE_NEW_TEAM:
      return merge({}, state, {[action.newTeam.id]: action.newTeam});
    default:
      return state;
  }
};

export default teamsReducer;
