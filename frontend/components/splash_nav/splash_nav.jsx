
import React from 'react';
// import { Link } from 'react-router-dom';

const SplashNav = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <nav className="splash-nav">
      <a>m a m b a</a>
      <button onClick={() => openModal('login')}>Log In</button>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.email}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default SplashNav;