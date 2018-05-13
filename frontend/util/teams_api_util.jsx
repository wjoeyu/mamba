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
