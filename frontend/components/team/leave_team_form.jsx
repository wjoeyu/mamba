import React from 'react';
import { withRouter } from 'react-router-dom';

class LeaveTeamForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //redirect is not working properly, it re-directs, but nothing renders because
  // there are no currentTeams for some reason

  handleSubmit(e) {
    e.preventDefault();
    this.props.removeSelf(this.props.match.params.teamId).then(({newTeam}) => {
      // debugger
      const teamId = newTeam.redirect_team.id;
      this.props.history.push(`/teams/${teamId}`);
      this.props.closeModal();
    });
  }

  render() {
    return (
      <div className="new-team-form-container">
        <div onClick={this.props.closeModal} className="new-team-close-x">&times;</div>
        <form onSubmit={this.handleSubmit} className="new-team-form-box">
          <div className="new-team-form-title">Remove yourself from the Workplace?</div>
          <div className="leave-team-text">
            If you remove yourself, you wont be able to access any of the
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

// <input type="hidden"
//   value={this.props.match.params.teamId}
//   />