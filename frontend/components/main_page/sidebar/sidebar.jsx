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
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.teamId !== nextProps.match.params.teamId) {
      this.props.fetchTeamMembers(nextProps.match.params.teamId);
    }
  }

  toggleVisibility() {
    const currentState = this.state.visible;
    const sidebar = document.getElementsByClassName('sidebar')[0];
    let taskButton = document.getElementsByClassName("my-tasks-button")[0];
    if (this.state.visible) {
        sidebar.classList.add('sidebar-out');
        setTimeout(() => {
            this.setState( {visible: !currentState} );
            taskButton.style.marginLeft = "66px";
            sidebar.classList.remove('sidebar-out');
        },320);
    } else {
        this.setState( {visible: !currentState} );
        taskButton.style.marginLeft = "26px";
    }
    this.setState( {userSearchVisible: false} );
  }

  toggleUserSearchVisibility() {
    if (!this.state.userSearchVisible) {
      this.props.fetchUsers({current_team: this.props.teamMemberKeys});
      this.setState( {userSearchVisible: !this.state.userSearchVisible});
  } else {
      const userSearchList = document.getElementsByClassName('new-members')[0];
      userSearchList.classList.add('new-members-out');
      setTimeout(() => {
          userSearchList.classList.remove('new-members-out');
          this.setState( {userSearchVisible: !this.state.userSearchVisible});
      },360);
    }
  }

  addTeamMember(memberId) {
    this.props.addTeamMember({id: this.props.match.params.teamId, member_id: memberId}).then(
        payload => {this.props.fetchTeamMembers(this.props.match.params.teamId)}).then(
            this.toggleUserSearchVisibility()
        );
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
          <div className ="sidebar-header">
            <div className="sidebar-header-left"><div className="sidebar-logo"/><span>mamba</span></div>
            <div className="sidebar-close-x" onClick={this.toggleVisibility}>
              <svg focusable="false" viewBox="0 0 32 32">
                <polygon points="24.485,27.314 27.314,24.485 18.828,16 27.314,7.515 24.485,4.686 16,13.172 7.515,4.686 4.686,7.515 13.172,16 4.686,24.485 7.515,27.314 16,18.828 "></polygon>
              </svg>
            </div>
          </div>
          <div className="sidebar-members">
            {teamMembers}
          </div>
          <svg
          className={this.state.userSearchVisible ? "active-plus-icon" : "plus-icon"}
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
