import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { selectTeamMembers, selectUserSearch } from '../../../reducers/selectors';
import { fetchTeamMembers, fetchUsers, addTeamMember } from '../../../actions/team_actions';
import { withRouter } from 'react-router-dom';

const mSp = (state, ownProps) => {
  return {
    teamMembers: selectTeamMembers(state),
    userSearch: selectUserSearch(state)
  };
};

const mDp = dispatch => {
  return {
    fetchTeamMembers: (id) => dispatch(fetchTeamMembers(id)),
    fetchUsers: () => dispatch(fetchUsers()),
    addTeamMember: (team) => dispatch(addTeamMember(team))
  };
};


export default withRouter(connect(mSp, mDp)(Sidebar));
