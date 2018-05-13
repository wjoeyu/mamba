import React from 'react';
import { withRouter } from 'react-router-dom';

export class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  componentDidMount() {
    // debugger
    this.props.fetchTeamMembers(this.props.match.params.teamId);
  }

  toggleVisibility() {
    const currentState = this.state.visible;
    this.setState( {visible: !currentState} );
  }

  render() {
    const teamMembers = this.props.teamMembers.map((member) => {
      return (
        <div key={member.id}>{member.name}</div>
      );
    });

    return (
      <div className={this.state.visible ?
          "sidebar" : "sidebar-hidden"}>
        <a>m a m b a</a>
        <div className="sidebar-close-x" onClick={this.toggleVisibility}>&times;</div>
        <div className="hamburger">&#9776;</div>
        <div className="sidebar-members">
          {teamMembers}
        </div>
      </div>
    )
  }
}

export default withRouter(Sidebar);
