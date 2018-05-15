import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { removeSelf } from '../../actions/team_actions';
import LeaveTeamForm from './leave_team_form';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const mSp = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mDp = dispatch => {
  return {
    removeSelf: (teamId) => dispatch(removeSelf(teamId)),
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(connect(mSp, mDp) (LeaveTeamForm));
