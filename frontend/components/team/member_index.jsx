import React from 'react';
import { withRouter } from 'react-router-dom';

export class MemberIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTeamMembers(this.props.match.params.teamId);
  }

  componentWillReceiveProps(nextProps) {
  if (this.props.match.params.teamId !== nextProps.match.params.teamId) {
    this.props.fetchTeamMembers(nextProps.match.params.teamId);
  }
}

  render() {
    const teamMembers = this.props.teamMembers.map((member) => {
      return (
        <div key={member.id}>{member.name}</div>
      );
    });

    return (
      <div className="team-members">
        {teamMembers}
      </div>
    )
  }
}

export default withRouter(MemberIndex);
