import React from 'react';
import {
  Route,
  HashRouter,
  Switch
} from 'react-router-dom';
import Modal from '../modal/modal';
import { ProtectedRoute } from "../../util/route_util";
import SidebarContainer from './sidebar/sidebar_container';
import MainContent from './main_content/main_content';
import TaskIndexContainer from '../task/task_index_container';
import TaskFormContainer from '../task/task_form_container';

// import MemberIndexContainer from '../team/member_index_container';

const MainPage = () => (
  <div className="main-page">
    <SidebarContainer />
    <MainContent />
  </div>
);

export default MainPage;

// <MemberIndexContainer />
