import { connect } from 'react-redux';
import TaskIndex from './task_index';
import { fetchTasks, createTask, updateTask } from '../../actions/task_actions';

const mSp = (state) => {
  return {
    
  };
};

const mDp = dispatch => {
  return {
    fetchTasks: () => dispatch(fetchTasks()),
    createTask: (task) => dispatch(createTask(task)),
    updateTask: (task) => dispatch(updateTask(task))
  };
};

export default connect(mSp, mDp)(TaskIndex);
