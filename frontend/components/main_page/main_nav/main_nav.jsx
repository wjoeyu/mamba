import React from 'react';
import DropdownContainer from './dropdown_container';
import TaskIndexContainer from '../../task/task_index_container';

const MainNav = () => {
  return (
    <div className="main-nav">
      <div className="my-tasks-button">My Tasks</div>
      <DropdownContainer/>
      <TaskIndexContainer />
    </div>
  )
};

export default MainNav;
