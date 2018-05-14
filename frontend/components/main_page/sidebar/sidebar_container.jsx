import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { selectTeamMembers } from '../../../reducers/selectors';
import { fetchTeamMembers } from '../../../actions/team_actions';
import { withRouter } from 'react-router-dom';

const mSp = (state, ownProps) => {
  return {
    teamMembers: selectTeamMembers(state)
  };
};

const mDp = dispatch => {
  return {
    fetchTeamMembers: (id) => dispatch(fetchTeamMembers(id))
  };
};


export default withRouter(connect(mSp, mDp)(Sidebar));
