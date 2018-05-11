export const getUserTeams = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/users/current_user_teams'
  });
};
