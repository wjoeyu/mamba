import React from 'react';
import { withRouter } from 'react-router-dom';

class NewTeamForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team_name: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  //figure out how to route properly first with history.push

  handleSubmit(e) {
    e.preventDefault();
    const team = Object.assign({}, this.state);
    this.props.createTeam(team).then(({newTeam}) => {
      const teamId = Object.values(newTeam)[0];
      this.props.history.push(`/team/${teamId}`);
      this.props.closeModal();
    });
  }

  renderErrors() {
    return(
      <div className="team-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="new-team-form-container">
        <div onClick={this.props.closeModal} className="new-team-close-x">&times;</div>
        <form onSubmit={this.handleSubmit} className="new-team-form-box">
          <div className="new-team-form-title">Create Your Workspace</div>
          <div className="new-team-form">
              <input type="text"
                value={this.state.team_name}
                onChange={this.update('team_name')}
                className="new-team-input"
                placeholder="Company or Team Name"
              />
            {this.renderErrors()}
            <label>WORKSPACE
              <br/>
              NAME</label>
          </div>
          <input id="new-team-submit" type="submit" value="Create Workspace"/>
        </form>
      </div>
    );
  }
}

export default withRouter(NewTeamForm);
