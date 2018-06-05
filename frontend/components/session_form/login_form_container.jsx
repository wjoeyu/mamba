import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchCurrentTeams } from "../../actions/team_actions";

const mapStateToProps = ({ errors, entities }) => {
  return {
    errors: errors.session,
    formType: 'Log in',
    currentTeams: entities.currentTeams
  };
};

const mapDispatchToProps = dispatch => {
  // const demo = {email:"demo@mamba.com", password: "demodemo"};
  return {
    processForm: (user) => dispatch(login(user)),
    otherForm: (
      <button onClick={() => dispatch(openModal('signup'))}>
        Sign Up
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
    openModal: modal => dispatch(openModal(modal)),
    fetchCurrentTeams: () => dispatch(fetchCurrentTeams()),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

// <button onClick={() => this.props.signInDemo()}>Demo</button>
