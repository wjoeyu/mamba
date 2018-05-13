export const selectCurrentTeams = (state) => {
  return Object.values(state.entities.currentTeams);
};

export const selectTeamMembers = (state) => {
  return Object.values(state.entities.users);
};
