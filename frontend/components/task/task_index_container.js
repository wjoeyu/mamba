import { connect } from 'react-redux';
import TaskIndex from './task_index';
import { fetchTeamTasks, createTask, updateTask } from '../../actions/task_actions';
import { selectTasks } from '../../reducers/selectors.js';

const mSp = (state) => {
  return {
    tasks: selectTasks(state)
  };
};

const mDp = dispatch => {
  return {
    fetchTeamTasks: (teamId) => dispatch(fetchTeamTasks(teamId)),
    createTask: (task) => dispatch(createTask(task)),
    updateReduxTask: (task) => dispatch(updateReduxTask(task)),
    updateTask: (task) => dispatch(updateTask(task))
  };
};

export default connect(mSp, mDp)(TaskIndex);
