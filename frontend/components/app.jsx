import React from 'react';
import SplashNavContainer from './splash_nav/splash_nav_container';
import {
  Route,
  HashRouter
} from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container.jsx';
import SignupFormContainer from './session_form/signup_form_container.jsx';
import Modal from './modal/modal';

const App = () => (
  <div>
    <Modal />
    <SplashNavContainer />
  </div>
);

export default App;

// <Route path="/login" component={LoginFormContainer} />
// <Route path="/signup" component={SignupFormContainer} />
