import React from "react";
import { withRouter } from 'react-router-dom';
import AvatarContainer from '../../avatar/avatar_container'

export class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
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
        <div onClick={() => this.props.history.push(`/team/${team.id}`)} key={team.id}>{team.team_name} </div>
      );
    });
    return (
      <div className="dropdown">
        <div className="dropdown-button" onClick={this.toggleVisibility}>
          Click Me!
          <AvatarContainer />
        </div>
          <div className={this.state.visible ?
              "dropdown-list" : "dropdown-hidden"}>
            {currentTeams}
            <div>Workplace settings...</div>
            <div onClick={() => this.props.openModal('new_team_form')}>Create New Workspace</div>

            <button onClick={() => this.props.logout()}>Log Out</button>
          </div>
      </div>
    );
  }
}

export default withRouter(Dropdown);

// then(() =>
//     this.props.history.push('/'))
