import React from 'react';
import {
  Route,
  HashRouter
} from 'react-router-dom';
import Modal from '../modal/modal';

import SidebarContainer from './sidebar/sidebar_container';
import MainNavContainer from './main_nav/main_nav';
// import MemberIndexContainer from '../team/member_index_container';

const MainPage = () => (
  <div>
    <SidebarContainer />
    <MainNavContainer />
  </div>
);

export default MainPage;

// <MemberIndexContainer />
