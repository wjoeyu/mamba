import React from "react";
import { withRouter } from 'react-router-dom';

export class TeamIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCurrentTeams();
  }

  render() {
    const currentTeams = this.props.currentTeams.map((team) => {
      return (
        <div onClick={() => this.props.history.push(`/team/${team.id}`)} key={team.id}>{team.team_name} </div>
      );
    });

    return (
      <a className="team-index">
        {currentTeams}
      </a>
    );
  }
}

export default withRouter(TeamIndex);
