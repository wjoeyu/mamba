export const selectTeams = (state) => {
  return Object.values(state.entities.teams);
};

export const selectTeamMembers = (state) => {
  return Object.values(state.entities.users);
};

export const selectTasks = (state) => {
  return Object.values(state.entities.tasks);
};

export const selectUserSearch = (state) => {
  return Object.values(state.entities.userSearch);
};
