import React from 'react';
import { withRouter } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    // this.handleSign = this.handleSign.bind(this);
  }

  render() {
    return (
      <div className="splash">
        <div className="splash-nav">
          <a>m a m b a</a>
          <a className="nav-right">
            <button className="nav-login" onClick={() => this.props.openModal('login')}>Log In</button>
            <button className="demo" onClick={() => this.props.signInDemo()}>Demo</button>
          </a>
        </div>
        <div className="masthead">
          <a>Move work forward</a>
          <section>Mamba is the easiest way for teams to <br/>track their work—and get results.</section>
        </div>
      </div>
    );
  }
}

export default withRouter(Splash);
