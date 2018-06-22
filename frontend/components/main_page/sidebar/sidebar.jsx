import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { closeX } from '../../svgs/svgs'

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
    this.handleOutsidePlusClick = this.handleOutsidePlusClick.bind(this);
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
        sidebar.style.width = "0";
        setTimeout(() => {
            this.setState( {visible: !currentState} );
        },320);
        taskButton.style.marginLeft = "66px";
    } else {
        this.setState( {visible: !currentState} );
        sidebar.style.width = "240px";
        taskButton.style.marginLeft = "26px";
    }
    this.setState( {userSearchVisible: false} );
  }

  toggleUserSearchVisibility() {
    if (!this.state.userSearchVisible) {
      document.addEventListener("click", this.handleOutsidePlusClick);
      this.props.fetchUsers({current_team: this.props.teamMemberKeys});
      this.setState( {userSearchVisible: true});
  } else {
      document.removeEventListener("click", this.handleOutsidePlusClick);
      const userSearchList = document.getElementsByClassName('new-members')[0];
      userSearchList.classList.add('new-members-out');
      setTimeout(() => {
          userSearchList.classList.remove('new-members-out');
          this.setState( {userSearchVisible: false});
      },360);
    }
  }

  handleOutsidePlusClick(e) {
    if(this.node.contains(e.target)) {
      return;
    }
    this.toggleUserSearchVisibility();
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
        <div className="sidebar">
          <div className ="sidebar-header">
            <div className="sidebar-header-left"><div className="sidebar-logo"/><span>mamba</span></div>
            <div className="sidebar-close-x" onClick={this.toggleVisibility}>
              {closeX()}
            </div>
          </div>
          <div className="sidebar-members">
            {teamMembers}
          </div>
          <svg
          className={this.state.userSearchVisible ? "active-plus-icon" : "plus-icon"}
          focusable="false"
          viewBox="0 0 32 32"
          onClick={this.toggleUserSearchVisibility}
          ref={ node => this.node = node }>
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
