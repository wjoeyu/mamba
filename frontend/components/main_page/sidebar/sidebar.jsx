import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
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
    this.setState( {visible: !currentState} );
  }

  render() {
    const teamMembers = this.props.teamMembers.map((member) => {
      return (
        <div className="ind-links" key={member.id}>
          <Link  to={`/team/${this.props.match.params.teamId}/users/${member.id}`}>{member.name}
          </Link>
        </div>
      );
    });

    return (
      <div className="sidebar-wrapper">
        <div className={this.state.visible ?
            "sidebar" : "sidebar-hidden"}>
          <span>mamba</span>
          <div className="sidebar-close-x" onClick={this.toggleVisibility}>&times;</div>
          <div className="sidebar-members">
            {teamMembers}
          </div>
        </div>
        <div className={this.state.visible ?
            "hamburger-hidden" : "hamburger"} onClick={this.toggleVisibility}>&#9776;</div>
      </div>
    );
  }
}

export default withRouter(Sidebar);
