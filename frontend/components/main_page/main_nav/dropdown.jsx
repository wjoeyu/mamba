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
      <div className="dropdown">
        <div className="dropdown-button">Click Me!</div>
        <ul className="dropdown-list">
          {currentTeams}
          <li><button onClick={() => this.props.logout().then(() => this.props.history.push('/'))}>Log Out</button></li>
        </ul>
      </div>
    );
  }
}

export default withRouter(Dropdown);
