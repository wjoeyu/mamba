import { connect } from 'react-redux';
import { login, logout } from '../../actions/session_actions';
import SplashNav from './splash_nav';
import { openModal } from '../../actions/modal_actions';

const mSp = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mDp = dispatch => {
  const demo = {email:"demo@mamba.com", password: "demodemo"};
  return {
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    signInDemo: () => dispatch(login(demo))
  }
};

export default connect(
  mSp,
  mDp
)(SplashNav);
