import React from "react";
import { Link, withRouter } from 'react-router-dom';
import AvatarContainer from '../../avatar/avatar_container'

export class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.currentTeamName = this.currentTeamName.bind(this);
    this.myTaskButton = this.myTaskButton.bind(this);
  }

  componentDidMount() {
    this.props.fetchCurrentTeams().then(({currentTeams}) =>  {
      const teamId = Object.keys(currentTeams)[0];
      if (this.props.location.pathname === '/main') {
        this.props.history.push(`/team/${teamId}`);
      }
  });
  }

  toggleVisibility() {
    const currentState = this.state.visible;
    this.setState( {visible: !currentState} );
  }

  currentTeamName() {
    if (Object.values(this.props.currentTeams).length && this.props.match.params.teamId) {
      if (this.props.currentTeams[this.props.match.params.teamId]) {
        return this.props.currentTeams[this.props.match.params.teamId].team_name;
      }
    }
  }

  myTaskButton () {
    return(
      <div>
        <Link className="my-tasks-button" to={`/team/${this.props.match.params.teamId}/users/${this.props.currentUser.id}`}>My Tasks</Link>
      </div>
    );
  }

  render() {
    const currentTeams = Object.values(this.props.currentTeams).map((team) => {
      return (
        <Link to={`/team/${team.id}`} key={team.id} className="dropdown-links">{team.team_name}</Link>
      );
    });

    //need to get currentTeamName to show up
    return (
      <div className="dropdown">
        {this.myTaskButton()}
        <div className="dropdown-button" onClick={this.toggleVisibility}>
          <div className="current-team">{this.currentTeamName()}</div>
          <AvatarContainer />
        </div>
          <div className={this.state.visible ?
              "dropdown-list" : "dropdown-hidden"}>
            {currentTeams}
            <div id="dropdown-line"></div>
            <div className="workspace-links" onClick={() => this.props.openModal('new_team_form')}>Create New Workspace</div>
            <div className="workspace-links" onClick={() => this.props.openModal('leave_team_form')}>Remove me from this Workspace</div>
            <div id="dropdown-line"></div>
            <button onClick={() => this.props.logout()}>Log Out</button>
          </div>
      </div>
    );
  }
}

export default withRouter(Dropdown);