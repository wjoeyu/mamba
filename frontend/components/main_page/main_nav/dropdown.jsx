import React from "react";
import { withRouter } from 'react-router-dom';

export class Dropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCurrentTeams();
  }

  render() {
    const currentTeams = this.props.currentTeams.map((team) => {
      return (
        <li key={team.id}>{team.team_name}</li>
      );
    });

    return (
      <div className="team-list">
        {currentTeams}
        <button onClick={() => this.props.logout().then(() => this.props.history.push('/'))}>Log Out</button>
      </div>
    );
  }
}

export default withRouter(Dropdown);
