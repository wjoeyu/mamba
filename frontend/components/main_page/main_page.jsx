import React from 'react';
import {
  Route,
  HashRouter
} from 'react-router-dom';
import Modal from '../modal/modal';


import SidebarContainer from './sidebar/sidebar_container';
import MainNavContainer from './main_nav/main_nav';

const MainPage = () => (
  <div>
    <MainNavContainer />
    <SidebarContainer />
  </div>
);

export default MainPage;

// <MainNavContainer />
// <SideBarContainer />
