import { connect } from 'react-redux';
import TaskIndex from './task_index';
import { fetchTeamTasks, createTask, updateTask } from '../../actions/task_actions';
import { fetchTeam } from '../../actions/team_actions';
import { selectTasks, selectCurrentTeams } from '../../reducers/selectors.js';
import { withRouter } from 'react-router-dom';

const mSp = (state) => {
  return {
    tasks: selectTasks(state),
    currentTeams: state.entities.currentTeams
  };
};

const mDp = dispatch => {
  return {
    fetchTeamTasks: (teamId) => dispatch(fetchTeamTasks(teamId)),
    createTask: (task) => dispatch(createTask(task)),
    updateReduxTask: (task) => dispatch(updateReduxTask(task)),
    updateTask: (task) => dispatch(updateTask(task)),
    fetchTeam:  (teamId) => dispatch(fetchTeam(teamId))
  };
};

export default withRouter(connect(mSp, mDp)(TaskIndex));
