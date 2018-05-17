import React from 'react';
import {
  Route,
  HashRouter
} from 'react-router-dom';
import Modal from '../modal/modal';

import SidebarContainer from './sidebar/sidebar_container';
import MainContent from './main_content/main_content';
// import MemberIndexContainer from '../team/member_index_container';

const MainPage = () => (
  <div className="main-page">
    <SidebarContainer />
    <MainContent />
  </div>
);

export default MainPage;

// <MemberIndexContainer />
