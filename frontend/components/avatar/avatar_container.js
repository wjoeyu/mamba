import { connect } from 'react-redux';
import Avatar from './avatar';

const mSp = (state) => {
  debugger
  return {
    currentUser: state.entities.users[state.session.id],
  };
};

export default connect(
  mSp,
  null
)(Avatar);
