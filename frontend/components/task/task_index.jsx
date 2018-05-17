import React from "react";
import { Link, withRouter } from 'react-router-dom';
import TaskFormContainer from './task_form_container';

export class TaskIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task_name: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount () {
    debugger
    this.props.fetchTeamTasks(this.props.match.params.teamId);
  }

  componentWillReceiveProps(nextProps) {
   if (this.props.match.params.teamId !== nextProps.match.params.teamId) {
     this.props.fetchTeamTasks(nextProps.match.params.teamId);
   }
 }

  update() {
    return e => this.setState({
      task_name: e.currentTarget.value
    });
  }

  handleChange() {
    e.preventDefault();
    this.update();
    const task = Object.assign({}, this.state);
    this.props.updateReduxTask(task);
    // this.props.updateTask(task);
  }

  render() {
    // debugger
    const { tasks } = this.props;
      const taskIndexLinks = tasks.map(task =>
        // debugger
        // `/team/:teamId/users/:userId/tasks/${task.id}``
        <Link to={`/team/${task.team_id}/users/${task.assignee_id}/tasks/${task.id}`}
          component = {TaskFormContainer}>
          <input type="text"
            value={task.task_name}
            onChange= {this.handleChange}
            className="task-index-row"
            placeholder="Add a task name"
            />
        </Link>
      )
    return (
      <div className="main-content">
        <div className="main-content-header">My tasks in current team.</div>
        <div className="task-wrapper">
          <div className="task-index">
            <div className="task-index-header">
              <div className="add-task-button">Add Task</div>
            </div>
            {taskIndexLinks}
          </div>
        </div>
      </div>
    );
  }

}

export default withRouter(TaskIndex);
