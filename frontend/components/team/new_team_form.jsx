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

  handleSubmit(e) {
    e.preventDefault();
    const team = Object.assign({}, this.state);
    this.props.createTeam(team).then(this.props.closeModal).then(() => this.props.history.push("/main"));
  }

  renderErrors() {
    return(
      <div className="session-errors">
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
          {this.renderErrors()}
          <div className="new-team-form">
              <input type="text"
                value={this.state.team_name}
                onChange={this.update('team_name')}
                className="new-team-input"
                placeholder="Company or Team Name"
              />
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
