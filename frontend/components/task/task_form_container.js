import { connect } from 'react-redux';
import TaskForm from './task_form';
import {
  fetchTask,
  createTask,
  updateTask,
  updateReduxTask,
  deleteTask
} from '../../actions/task_actions';
import { selectTasks, selectTeamMembers } from '../../reducers/selectors';
import { fetchTeamMembers } from '../../actions/team_actions';
import { withRouter } from 'react-router-dom';


const mSp = (state, ownProps) => {
  return {
    task: state.entities.tasks[ownProps.match.params.taskId],
    user: state.entities.users[ownProps.match.params.userId],
    currentUser: state.entities.users[state.session.id],
    teamMembers: state.entities.users
  };
};

const mDp = dispatch => {
  return {
    updateReduxTask: (task) => dispatch(updateReduxTask(task)),
    updateTask: (task) => dispatch(updateTask(task)),
    fetchTask:  (taskId) => dispatch(fetchTask(taskId)),
    fetchTeamMembers: (id) => dispatch(fetchTeamMembers(id)),
    delTask: (taskId) => dispatch(deleteTask(taskId))
  };
};

export default withRouter(connect(mSp, mDp)(TaskForm));
