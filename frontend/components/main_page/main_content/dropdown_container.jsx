import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import Dropdown from './dropdown';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { selectTeams } from '../../../reducers/selectors';
import { fetchTeams } from '../../../actions/team_actions';

const mSp = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    teams: state.entities.teams
  };
};

const mDp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    fetchTeams: () => dispatch(fetchTeams())
  };
};

export default connect(
  mSp,
  mDp
)(Dropdown);
