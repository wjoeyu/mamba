export const getUserTeams = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/teams'
  });
};


export const getTeamMembers = (teamId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/teams/${teamId}/`
  });
};

export const addTeamMember = (team) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/teams/${team.id}`,
    data: { team }
  });
};

export const removeTeamMember = (team) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/teams/${team.id}`
  });
};

export const getTeam = (teamId) => {
  return $.ajax({
    method: 'GET',
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

export const updateTeam = (team) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/teams/${team.id}`,
    data: { team }
  });
};
