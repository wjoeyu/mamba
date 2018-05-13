import React from "react";
import { withRouter } from 'react-router-dom';

export class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.toggleVisibility = this.toggleVisibility.bind(this)
  }

  componentDidMount() {
    this.props.fetchCurrentTeams();
  }

  toggleVisibility() {
    const currentState = this.state.visible;
    this.setState( {visible: !currentState} );
  }

  render() {
    const currentTeams = this.props.currentTeams.map((team) => {
      return (
        <div key={team.id}>{team.team_name}</div>
      );
    });

    return (
      <div className="dropdown">
        <div className="dropdown-button" onClick={this.toggleVisibility}>
          Click Me!
        </div>
          <div className={this.state.visible ?
              "dropdown-list" : "dropdown-hidden"}>
            {currentTeams}
            <div>Workplace settings...</div>

            <button onClick={() => this.props.logout().then(() =>
                this.props.history.push('/'))}>Log Out</button>
          </div>
      </div>
    );
  }
}

export default withRouter(Dropdown);
