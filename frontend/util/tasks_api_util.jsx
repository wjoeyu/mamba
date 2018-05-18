export const getTeamTasks = (teamId) => {
  return $.ajax({
    method: 'GET',
    url: 'api/tasks',
    data: {task: {team_id: teamId}}
  });
};

export const getUserTasks = (assigneeId, teamId) => {
  return $.ajax({
    method: 'GET',
    url: `api/tasks/get_user_tasks/${teamId}/${assigneeId}`,
    // data: {task: {assignee_id: assigneeId, team_id: teamId}}
  });
};

export const getTask = (taskId) => {
  return $.ajax({
    method: 'GET',
    url: `api/tasks/${taskId}`
  });
};

export const createTask = (task) => {
  return $.ajax({
    method: 'POST',
    url: 'api/tasks',
    data: { task }
  });
};

export const updateTask = (task) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/tasks/${task.id}`,
    data: { task }
  });
};

export const deleteTask = (taskId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/tasks/${taskId}`
  });
};
