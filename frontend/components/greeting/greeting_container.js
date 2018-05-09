import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';
import { openModal } from '../../actions/modal_actions';

const mSp = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mDp = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(
  mSp,
  mDp
)(Greeting);
