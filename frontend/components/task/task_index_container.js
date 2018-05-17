import { connect } from 'react-redux';
import TaskIndex from './task_index';
import { fetchTeamTasks, createTask, updateTask, updateReduxTask } from '../../actions/task_actions';
import { fetchTeam, fetchTeamMembers } from '../../actions/team_actions';
import { selectTasks } from '../../reducers/selectors.js';
// import { withRouter } from 'react-router-dom';

const mSp = (state) => {
  return {
    tasks: selectTasks(state),
    currentTeams: state.entities.currentTeams,
    users: state.entities.users,
    currentUser: state.entities.users[state.session.id]
  };
};

const mDp = dispatch => {
  return {
    fetchTeamTasks: (teamId) => dispatch(fetchTeamTasks(teamId)),
    createTask: (task) => dispatch(createTask(task)),
    updateReduxTask: (task) => dispatch(updateReduxTask(task)),
    updateTask: (task) => dispatch(updateTask(task)),
    fetchTeam:  (teamId) => dispatch(fetchTeam(teamId)),
    fetchTeamMembers: (teamId) => dispatch(fetchTeamMembers(teamId))
  };
};

export default connect(mSp, mDp)(TaskIndex);
