import React from "react";
import { Link, withRouter } from 'react-router-dom';

export class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.currentTeamName = this.currentTeamName.bind(this);
    this.toggleInvisible = this.toggleInvisible.bind(this);
    this.myTaskButton = this.myTaskButton.bind(this);
    this.handleLeaveRequest = this.handleLeaveRequest.bind(this);
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
    this.setState( {visible: true} );
    document.addEventListener('click', () => this.setState({visible: false}), {once: true});
  }

  toggleInvisible() {
    this.setState( {visible: false} );
  }

  currentTeamName() {
    if (Object.values(this.props.currentTeams).length && this.props.match.params.teamId) {
      if (this.props.currentTeams[this.props.match.params.teamId]) {
        return this.props.currentTeams[this.props.match.params.teamId].team_name;
      }
    }
  }

  handleLeaveRequest() {
    debugger
    if (Object.keys(this.props.currentTeams).length > 1) {
      this.props.openModal('leave_team_form');
    }
  }

  myTaskButton () {
    return(
      <div>
        <Link
          className="my-tasks-button"
          to={`/team/${this.props.match.params.teamId}/users/${this.props.currentUser.id}`}>My Tasks</Link>
      </div>
    );
  }

  render() {
    const currentTeams = Object.values(this.props.currentTeams).map((team) => {
      return (
        <Link to={`/team/${team.id}`} key={team.id} className="dropdown-links">{team.team_name}</Link>
      );
    });

    const currentUserInitials = this.props.currentUser.name.split(" ").map(el=>el[0]).join("");

    return (
      <div className="dropdown">
        {this.myTaskButton()}
        <div className="dropdown-button" onMouseEnter={this.toggleVisibility} >
          <div className="current-team">{this.currentTeamName()}</div>
          <div className="current-user-avatar">
            {currentUserInitials}
          </div>
        </div>
          <div onMouseLeave={this.toggleInvisible} className={this.state.visible ?
              "dropdown-list" : "dropdown-hidden"}>
            {currentTeams}
            <div id="dropdown-line"></div>
            <div className="workspace-links" onClick={() => this.props.openModal('new_team_form')}>Create New Workspace</div>
            <div className="workspace-links" onClick={this.handleLeaveRequest}>Remove me from this Workspace</div>
            <div id="dropdown-line"></div>
            <button onClick={() => this.props.logout()}>Log Out</button>
          </div>
      </div>
    );
  }
}

export default withRouter(Dropdown);
