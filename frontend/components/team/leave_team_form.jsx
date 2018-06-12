import React from 'react';
import { withRouter } from 'react-router-dom';

class LeaveTeamForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.removeSelf(this.props.match.params.teamId).then(({teams}) => {
      const teamId = teams.redirect_team.id;
      this.props.history.push(`/team/${teamId}`);
      this.props.closeModal();
    });
  }

  render() {
    return (
      <div className="new-team-form-container">
        <div onClick={this.props.closeModal} className="new-team-close-x">&times;</div>
        <form onSubmit={this.handleSubmit} className="new-team-form-box">
          <div className="new-team-form-title">Remove Yourself from the Workspace?</div>
          <div className="leave-team-text">
            If you remove yourself, you won't be able to access any of the
            projects or tasks in this team. If you want to regain access,
            you'll need to ask a coworker to invite you to the workspace again.
          </div>
          <input id="leave-team-submit" type="submit" value="Remove Me"/>
          <div onClick={this.props.closeModal} className="leave-team-cancel">Cancel</div>
        </form>
      </div>
    );
  }
}

export default withRouter(LeaveTeamForm);
