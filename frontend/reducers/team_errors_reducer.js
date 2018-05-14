import {
  RECEIVE_TEAM_ERRORS,
  RECEIVE_NEW_TEAM
} from '../actions/team_actions';

export default (state = [], action) => {

  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TEAM_ERRORS:
      return action.errors;
    case RECEIVE_NEW_TEAM:
      return [];
    default:
      return state;
  }
};
