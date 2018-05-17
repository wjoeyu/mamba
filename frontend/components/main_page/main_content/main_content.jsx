import React from 'react';
import DropdownContainer from './dropdown_container';
import TaskIndexContainer from '../../task/task_index_container';

const MainContent = () => {
  return (
    <div className="main-nav">
      <DropdownContainer/>
      <TaskIndexContainer />
    </div>
  );
};

export default MainContent;
