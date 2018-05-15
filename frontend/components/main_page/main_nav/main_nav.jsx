import React from 'react';
import DropdownContainer from './dropdown_container';

const MainNav = () => {
  return (
    <div className="main-nav">
      <div className="my-tasks-button">My Tasks</div>
      <DropdownContainer/>
    </div>
  )
};

export default MainNav;
