import { connect } from 'react-redux';
import TaskForm from './task_form';
import {
  fetchTask,
  createTask,
  updateTask,
  updateReduxTask
} from '../../actions/task_actions';
import { selectTasks, selectTeamMembers } from '../../reducers/selectors';
import { fetchTeamMembers } from '../../actions/team_actions';


const mSp = (state) => {
  return {
    tasks: selectTasks(state),
    users: state.entities.users,
    currentUser: state.entities.users[state.session.id],
    teamMembers: selectTeamMembers(state)
  };
};

const mDp = dispatch => {
  return {
    updateReduxTask: (task) => dispatch(updateReduxTask(task)),
    updateTask: (task) => dispatch(updateTask(task)),
    fetchTask:  (taskId) => dispatch(fetchTask(taskId)),
    fetchTeamMembers: (id) => dispatch(fetchTeamMembers(id))
  };
};

export default connect(mSp, mDp)(TaskForm);
