import React from 'react';
import { withRouter, HashRouter } from 'react-router-dom';

const Splash = ({ currentUser, logout, openModal, signInDemo }) => {
  const sessionLinks = () => (
    <div className="splash">
      <div className="splash-nav">
        <span className="splash-mamba">mamba</span>
        <div className="nav-right">
          <button className="nav-login" onClick={() => openModal('login')}>Log In</button>
          <button className="demo" onClick={() => signInDemo()}>Demo</button>
        </div>
      </div>
      <div className="masthead">
        <a>Move work forward</a>
        <section>Mamba is the easiest way for teams to track their work—and get results.</section>
      </div>
    </div>
  );

};


export default withRouter(Splash);
