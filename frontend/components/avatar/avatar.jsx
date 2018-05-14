import React from 'react';

const Avatar = ({currentUser}) => {

  const currentUserInitials = currentUser.name.split(" ").map(el=>el[0]).join("");
  return (
    <div className="avatar">
      {currentUserInitials}
    </div>
  )
}

export default Avatar;
