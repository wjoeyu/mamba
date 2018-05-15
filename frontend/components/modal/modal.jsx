import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import NewTeamFormContainer from '../team/new_team_form_container';
import LeaveTeamFormContainer from '../team/leave_team_container';
import { Route } from 'react-router-dom';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  let modalType;
  switch (modal) {
    case 'login':
      modalType = 'modal-child';
      component = <LoginFormContainer />;
      break;
    case 'signup':
      modalType = 'modal-child';
      component = <SignupFormContainer />;
      break;
    case 'new_team_form':
      modalType = 'new-team-modal';
      component = <Route path="team/:teamId" component = {NewTeamFormContainer} />;
      break;
    case 'leave_team_form':
      modalType = 'new-team-modal';
      component = <Route path="/team/:teamId" component = {LeaveTeamFormContainer} />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className={modalType} onClick={e => e.stopPropagation()}>
        <div className="modal-content">
          { component }
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
