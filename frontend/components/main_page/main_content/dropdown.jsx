import React from "react";
import { Link, withRouter } from 'react-router-dom';

export class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.handleOutsideDropdown = this.handleOutsideDropdown.bind(this);
    this.currentTeamName = this.currentTeamName.bind(this);
    this.myTaskButton = this.myTaskButton.bind(this);
    this.handleLeaveRequest = this.handleLeaveRequest.bind(this);
  }

  componentDidMount() {
    this.props.fetchTeams().then(({teams}) =>  {
      const teamId = Object.keys(teams)[0];
      if (this.props.location.pathname === '/main') {
        this.props.history.push(`/team/${teamId}`);
      }
  });
  }

  toggleVisibility() {
    if(!this.state.visible) {
      document.addEventListener("click", this.handleOutsideDropdown);
    } else {
      document.removeEventListener("click", this.handleOutsideDropdown);
    }

    this.setState({visible: !this.state.visible});
  }

  handleOutsideDropdown(e) {
    if(this.node.contains(e.target)) {
      return;
    }
    this.toggleVisibility();
  }

  currentTeamName() {
    if (Object.values(this.props.teams).length && this.props.match.params.teamId) {
      if (this.props.teams[this.props.match.params.teamId]) {
        return this.props.teams[this.props.match.params.teamId].team_name;
      }
    }
  }

  handleLeaveRequest() {
    if (Object.keys(this.props.teams).length > 1) {
      this.props.openModal('leave_team_form');
  } else {
      window.alert("You must belong to a team. Please create a new workspace before leaving this one.")
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
    const teams = Object.values(this.props.teams).map((team) => {
      return (
        <Link to={`/team/${team.id}`} key={team.id} className="dropdown-links">{team.team_name}</Link>
      );
    });

    const currentUserInitials = this.props.currentUser.name.split(" ").map(el=>el[0]).join("");

    return (
      <div className="dropdown">
        {this.myTaskButton()}
        <div
          className="dropdown-button" onClick={this.toggleVisibility}
          ref={ node => this.node = node }>
          <div className="current-team">{this.currentTeamName()}</div>
          <div className="current-user-avatar">
            {currentUserInitials}
          </div>
        </div>
          <div className={this.state.visible ?
              "dropdown-list" : "dropdown-hidden"}>
            {teams}
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
