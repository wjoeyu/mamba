import React from 'react';
import Splash from './splash/splash_container';
import {
  Route,
  HashRouter, Switch
} from 'react-router-dom';
import Frontpage from './frontpage';
import MainPage from './main_page/main_page';
import Modal from './modal/modal';

// import { AuthRoute } from '../util/route_util.jsx';

const App = () => (
  <div>
    <Modal />
    <Switch>
      <Route exact path="/" component={Frontpage} />
      <Route path="/main" component={MainPage} />
      <Route path="/team/:teamId" component={MainPage} />
    </Switch>
  </div>
);

export default App;
