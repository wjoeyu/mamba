import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import {
  Route,
  HashRouter
} from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container.jsx';
import SignupFormContainer from './session_form/signup_form_container.jsx';

const App = () => (
  <div>
    <h1>M a m b a</h1>
    <GreetingContainer />

    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
