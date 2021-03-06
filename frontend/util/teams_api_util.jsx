export const getUserTeams = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/teams'
  });
};

export const getUsers = (user) => {
  return $.ajax({
    method: 'GET',
    url: 'api/users',
    data: { user }
  });
};

export const getTeamMembers = (teamId) => {
  return $.ajax({
    method: 'GET',
    url: `api/teams/${teamId}/get_members`
  });
};

export const addTeamMember = (team) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/teams/${team.id}`,
    data: { team }
  });
};

export const removeSelf = (teamId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/teams/${teamId}`
  });
};

export const createTeam = (team) => {
  return $.ajax({
    method: 'POST',
    url: 'api/teams/',
    data: { team }
  });
};

export const getTeam = (teamId) => {
  return $.ajax({
    method: 'GET',
    url: `api/teams/${teamId}`
  });
};


export const updateTeam = (team) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/teams/${team.id}`,
    data: { team }
  });
};
