import { RECEIVE_ALL_USERS, CLEAR_USER_SEARCH } from '../actions/team_actions';

const userSearchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return action.users;
    case CLEAR_USER_SEARCH:
      return {};
    default:
      return state;
  }
};

export default userSearchReducer;
