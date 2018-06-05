import { connect } from 'react-redux';
import React from 'react';
import { createTeam, fetchCurrentTeams, clearErrors } from '../../actions/team_actions';
import NewTeamForm from './new_team_form';
import { closeModal } from '../../actions/modal_actions';

const mSp = ({ errors }) => {
  return {
    errors: errors.team,
  };
};

const mDp = dispatch => {
  return {
    createTeam: (team) => dispatch(createTeam(team)),
    closeModal: () => dispatch(closeModal()),
    fetchCurrentTeams: () => dispatch(fetchCurrentTeams()),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mSp, mDp)(NewTeamForm);
