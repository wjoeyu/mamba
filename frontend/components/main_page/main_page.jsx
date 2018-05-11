import React from 'react';
import {
  Route,
  HashRouter
} from 'react-router-dom';
import Modal from '../modal/modal';

import DropdownContainer from './main_nav/dropdown_container';

const MainPage = () => (
  <div>
    <DropdownContainer />
  </div>
);

export default MainPage;

// <MainNavContainer />
// <SideBarContainer />
