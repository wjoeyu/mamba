import MemberIndex from './member_index';
import { connect } from 'react-redux';
import { fetchTeamMembers } from "../../actions/team_actions";
import { withRouter } from 'react-router-dom';

const mSp = (state, ownProps) => {

  const currentTeam = state.entities.currentTeams[ownProps.match.params.teamId];
  const teamMembers = currentTeam.memberIds.map(id => state.entities.users[id]);
  return {
    teamMembers: teamMembers
  };
};

const mDp = dispatch => {
  return {
    fetchTeamMembers: (id) => dispatch(fetchTeamMembers(id))
    // fetchCurrentTeams: () => dispatch(fetchCurrentTeams())
  };
};

export default withRouter(connect(mSp, mDp)(MemberIndex));
