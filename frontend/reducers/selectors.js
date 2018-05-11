export const selectCurrentTeams = (state) => {
  return Object.values(state.entities.currentTeams);
};
