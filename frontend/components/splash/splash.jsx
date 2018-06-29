import React from 'react';
import { withRouter } from 'react-router-dom';
import { angelList, linkedIn, gitHub } from '../svgs/svgs';


class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="splash">
        <div className="splash-nav">
          <a className="nav-left">
            <div className="splash-logo"/><div className="splash-mamba">m a m b a</div>
          </a>
          <div className="personal-links">
            <a href='https://www.joey-wu.com'>
              <div className="home-page-link"></div>
            </a>
            <div className="github-wrapper">
              <a href="https://github.com/wjoeyu" className="github" aria-hidden="true">
                {gitHub()}
              </a>
            </div>
            <div className="linkedin-wrapper">
              <a href="https://www.linkedin.com/in/wjoeyu/" className="linkedin" aria-hidden="true">
                {linkedIn()}
              </a>
            </div>
            <div className="angellist-wrapper">
      			  <a href="https://angel.co/joeywu" className="angellist" aria-hidden="true">
                {angelList()}
              </a>
            </div>
          </div>
          <a className="nav-right">
            <button className="nav-login" onClick={() => this.props.openModal('login')}>Log In</button>
            <button className="demo" onClick={() => this.props.signInDemo()}>Demo</button>
          </a>
        </div>
        <div className="masthead">
          <a>Move work forward</a>
          <section>Mamba is the easiest way for teams to <br/>track their work—and get results.</section>
        </div>
        <div className="lol">
            <div className="lol-1"></div>
            <div className="lol-1"></div>
        </div>
      </div>
    );
  }
}

export default withRouter(Splash);
