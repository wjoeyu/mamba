import { RECEIVE_NON_MEMBERS, CLEAR_USER_SEARCH } from '../actions/team_actions';

const userSearchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NON_MEMBERS:
      return action.nonMembers;
    case CLEAR_USER_SEARCH:
      return {};
    default:
      return state;
  }
};

export default userSearchReducer;
