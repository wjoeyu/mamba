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
        <div key={team.id}>{team.team_name}</div>
      );
    });

    return (
      <div className="dropdown">
        <div className="dropdown-button">
          Click Me!
        </div>
        <div className="dropdown-list">
          {currentTeams}
        <div>
          <button onClick={() => this.props.logout().then(() => this.props.history.push('/'))}>Log Out</button>
        </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Dropdown);
