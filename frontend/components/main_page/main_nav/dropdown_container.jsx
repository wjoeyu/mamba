import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import Dropdown from './dropdown';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { selectCurrentTeams } from '../../../reducers/selectors';
import { fetchCurrentTeams } from '../../../actions/teams_actions';

const mSp = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    currentTeams: selectCurrentTeams(state)
  };
};

const mDp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    fetchCurrentTeams: () => dispatch(fetchCurrentTeams())
  };
};

export default connect(
  mSp,
  mDp
)(Dropdown);

// session, entities: { users, currentTeams }
