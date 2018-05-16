import * as APIUtil from '../util/tasks_api_util';

export const RECEIVE_TASKS = "RECEIVE_TASKS";
export const RECEIVE_TASK =  "RECEIVE_TASK";
export const REMOVE_TASK = "REMOVE_TASK";

export const receiveTasks = tasks => {
  return {
    type: RECEIVE_TASKS,
    tasks
  };
};

export const receiveTask = task => {
  return {
    type: RECEIVE_TASK,
    task
  };
};

export const removeTask = taskId => {
  return {
    type: REMOVE_TASK,
    taskId
  };
};

export const updateReduxTask = (task) => dispatch => {
  return dispatch(receiveTask(task));
};

export const fetchTasks = () => dispatch => (
  APIUtil.getTasks().then(payload => (
    dispatch(receiveTasks(payload))
  ))
);

export const fetchTask = (taskId) => dispatch => (
  APIUtil.getTask(taskId).then(payload => (
    dispatch(receiveTask(payload))
  ))
);

export const createTask = (task) => dispatch => (
  APIUtil.createTask(task).then(payload => (
    dispatch(receiveTask(payload))
  ))
);

export const updateTask = (task) => dispatch => (
  APIUtil.updateTask(task).then(payload => (
    dispatch(receiveTask(payload))
  ))
);

//double-check this
export const deleteTask = (taskId) => dispatch => (
  APIUtil.deleteTask(taskId).then(payload => (
    dispatch(removeTask(taskId))
  ))
);
