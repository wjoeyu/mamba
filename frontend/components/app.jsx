import React from 'react';
import Splash from './splash/splash_container';
import {
  Route,
  HashRouter, Switch
} from 'react-router-dom';
import Frontpage from './frontpage';
import MainPage from './main_page/main_page';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Frontpage} />
      <Route path="/test" component={MainPage} />
    </Switch>
  </div>
);

export default App;
