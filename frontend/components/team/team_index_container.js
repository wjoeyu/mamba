import { connect } from 'react-redux';
import TeamIndex from './team_index';
import { selectCurrentTeams } from '../../reducers/selectors';
import { fetchCurrentTeams } from '../../actions/team_actions';

const mSp = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    currentTeams: selectCurrentTeams(state)
  };
};

const mDp = dispatch => {
  return {
    fetchCurrentTeams: () => dispatch(fetchCurrentTeams())
  };
};

export default connect(
  mSp,
  mDp
)(TeamIndex);
