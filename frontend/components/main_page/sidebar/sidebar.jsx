import React from 'react';
import { withRouter } from 'react-router-dom';

export class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    debugger
    this.props.fetchTeamMembers(this.props.match.params.teamId);
  }

  render() {
    const teamMembers = this.props.teamMembers.map((member) => {
      return (
        <div key={member.id}>{member.name}</div>
      );
    });

    return (
      <div className="sidebar-members">
        {teamMembers}
      </div>
    )
  }
}

export default withRouter(Sidebar);
