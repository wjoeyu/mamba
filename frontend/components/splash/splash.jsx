import React from 'react';

const Splash = ({ currentUser, logout, openModal, signInDemo }) => {
  const sessionLinks = () => (
    <div className="splash">
      <div className="splash-nav">
        <a>m a m b a</a>
        <a>
          <button className="nav-login" onClick={() => openModal('login')}>Log In</button>
          <button className="demo" onClick={() => signInDemo()}>Demo</button>
        </a>
      </div>

      <h1>Move work forward</h1>
      <section>Mamba is the easiest way for teams to track their work--and see how behind they are. Progress Tracker is better.</section>
    </div>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.name}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Splash;
