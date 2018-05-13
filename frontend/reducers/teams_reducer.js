import merge from 'lodash/merge';

import { RECEIVE_CURRENT_TEAMS } from "../actions/teams_actions";

const teamsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_TEAMS:
      return action.currentTeams;
    default:
      return state;
  }
};

export default teamsReducer;
