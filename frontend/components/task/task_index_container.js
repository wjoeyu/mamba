import { connect } from 'react-redux';
import TaskIndex from './task_index';
import {
  fetchUserTasks,
  fetchTeamTasks,
  createTask,
  updateTask,
  updateReduxTask
} from '../../actions/task_actions';
import { fetchTeam, fetchTeamMembers } from '../../actions/team_actions';
import { selectTasks } from '../../reducers/selectors.js';

const mSp = (state) => {
  return {
    tasks: selectTasks(state),
    teams: state.entities.teams,
    users: state.entities.users,
    currentUser: state.entities.users[state.session.id]
  };
};

const mDp = dispatch => {
  return {
    fetchUserTasks: (assigneeId, teamId) => dispatch(fetchUserTasks(assigneeId, teamId)),
    fetchTeamTasks: (teamId) => dispatch(fetchTeamTasks(teamId)),
    createTask: (task) => dispatch(createTask(task)),
    updateReduxTask: (task) => dispatch(updateReduxTask(task)),
    updateTask: (task) => dispatch(updateTask(task)),
    fetchTeam:  (teamId) => dispatch(fetchTeam(teamId)),
    fetchTeamMembers: (teamId) => dispatch(fetchTeamMembers(teamId))
  };
};

export default connect(mSp, mDp)(TaskIndex);
