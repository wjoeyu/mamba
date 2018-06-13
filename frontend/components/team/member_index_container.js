import MemberIndex from './member_index';
import { connect } from 'react-redux';
import { fetchTeamMembers } from "../../actions/team_actions";
import { withRouter } from 'react-router-dom';

const mSp = (state, ownProps) => {

  const team = state.entities.teams[ownProps.match.params.teamId];
  const teamMembers = team.memberIds.map(id => state.entities.users[id]);
  return {
    teamMembers: teamMembers
  };
};

const mDp = dispatch => {
  return {
    fetchTeamMembers: (id) => dispatch(fetchTeamMembers(id))
  };
};

export default withRouter(connect(mSp, mDp)(MemberIndex));
