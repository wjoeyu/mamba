import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { createTeam } from '../../actions/team_actions';
import NewTeamForm from './new_team_form';
import { closeModal } from '../../actions/modal_actions';

//add team creation errors later

// const mapStateToProps = (state) => {
//   return {
//     // errors: errors.team,
//     formType: 'Log in',
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    createTeam: (team) => dispatch(createTeam(team)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(null, mapDispatchToProps)(NewTeamForm);
