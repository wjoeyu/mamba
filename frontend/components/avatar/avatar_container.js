import { connect } from 'react-redux';
import Avatar from './avatar';

const mSp = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
  };
};

export default connect(
  mSp,
  null
)(Avatar);
