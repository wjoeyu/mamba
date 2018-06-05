import React from 'react';
import DropdownContainer from './dropdown_container';
import TaskIndexContainer from '../../task/task_index_container';
import TaskFormContainer from '../../task/task_form_container';
import { Route } from 'react-router-dom';

const MainContent = () => {
  return (
    <div className="main">
      <DropdownContainer/>
      <Route path="/team/:teamId/users/:userId/tasks/:taskId" component={TaskFormContainer} />
      <Route path="/team/:teamId/users/:userId" component={TaskIndexContainer} />
      <Route exact path="/team/:teamId" component={TaskIndexContainer} />
    </div>
  );
};

export default MainContent;
