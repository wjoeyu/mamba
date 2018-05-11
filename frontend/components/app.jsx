import React from 'react';
import Splash from './splash/splash_container';
import {
  Route,
  HashRouter, Switch
} from 'react-router-dom';
import Frontpage from './frontpage';
// import LoginFormContainer from './session_form/login_form_container.jsx';
// import SignupFormContainer from './session_form/signup_form_container.jsx';
// import Modal from './modal/modal';

const App = () => (
  <div>
    <Switch>
      <Route path="/" component={Frontpage} />
    </Switch>
  </div>
);

export default App;

// <Route path="/login" component={LoginFormContainer} />
// <Route path="/signup" component={SignupFormContainer} />

// <Modal />
// <Splash />

// <Route path="/teams/" component={MainPage} />
