import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      userSearchVisible: false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.toggleUserSearchVisibility = this.toggleUserSearchVisibility.bind(this);
    this.addTeamMember = this.addTeamMember.bind(this);
  }

  componentDidMount() {
    if (this.props.match.teamId) {
      this.props.fetchTeamMembers(this.props.match.params.teamId);
    }
    this.props.fetchUsers();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.teamId !== nextProps.match.params.teamId) {
      this.props.fetchTeamMembers(nextProps.match.params.teamId);
    }
  }

  toggleVisibility() {
    const currentState = this.state.visible;
    this.setState( {visible: !currentState} );
    let taskButton = document.getElementsByClassName("my-tasks-button")[0];
    if (this.state.visible) {
        taskButton.style.marginLeft = "66px";
    } else {
        taskButton.style.marginLeft = "26px";
    }
  }

  toggleUserSearchVisibility() {
    const visible = this.state.userSearchVisible;
    this.setState( {userSearchVisible: !visible});
  }

  addTeamMember(memberId) {
    this.props.addTeamMember({id: this.props.match.params.teamId, member_id: memberId}).then(
        payload => {this.props.fetchTeamMembers(this.props.match.params.teamId)});
  }

  render() {
    const teamMembers = this.props.teamMembers.map((member) => {
      return (
        <div className="ind-links" key={member.id}>
          <Link to={`/team/${this.props.match.params.teamId}/users/${member.id}`}>{member.name}
          </Link>
        </div>
      );
    });

    // need to only show non members in user search
    // const nonMembers = [];
    // this.props.userSearch.forEach((user) => {
    //     if(this.props.teamMembers[user.id]) {
    //         nonMembers.push(user);
    //     }
    // }
    // );

    const userSearch = this.props.userSearch.map((user) => {
      return (
        <div className="add-members-list" key={user.id}>
          <div onClick={() => this.addTeamMember(user.id)}>{user.name}</div>
        </div>
      )
    });

    return (
      <div className="sidebar-wrapper">
        <div className={this.state.visible ?
            "sidebar" : "sidebar-hidden"}>
          <div className="sidebar-logo"/><span>mamba</span>
          <div className="sidebar-close-x" onClick={this.toggleVisibility}>&times;</div>
          <div className="sidebar-members">
            {teamMembers}
          </div>
          <svg
          className="plus-icon"
          focusable="false"
          viewBox="0 0 32 32"
          onClick={this.toggleUserSearchVisibility}>
              <polygon points="28,14 18,14 18,4 14,4 14,14 4,14 4,18 14,18 14,28 18,28 18,18 28,18"></polygon>
          </svg>
          <div className={this.state.userSearchVisible ? "new-members" : "new-members-hidden"}>
            {userSearch}
          </div>
        </div>
        <div className={this.state.visible ?
            "hamburger-hidden" : "hamburger"} onClick={this.toggleVisibility}>
            <svg
            className="hamburger-icon"
            focusable="false"
            viewBox="0 0 32 32"><rect x="2" y="4" width="28" height="4"></rect><rect x="2" y="14" width="28" height="4"></rect><rect x="2" y="24" width="28" height="4"></rect>
            </svg>
        </div>
      </div>
    );
  }
}

export default withRouter(Sidebar);
