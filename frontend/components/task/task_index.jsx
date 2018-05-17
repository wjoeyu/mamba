import React from "react";
import { Link, withRouter } from 'react-router-dom';
import TaskFormContainer from './task_form_container';

export class TaskIndex extends React.Component {
  constructor(props) {
    super(props);
    this.timeout = null;
    this.currentTeamName = this.currentTeamName.bind(this);
    this.currentTeamMember = this.currentTeamMember.bind(this);
  }

  componentDidMount () {
    this.props.fetchTeamTasks(this.props.match.params.teamId);
    this.props.fetchTeam(this.props.match.params.teamId);
    this.props.fetchTeamMembers(this.props.match.params.teamId);
  }

  componentWillReceiveProps(nextProps) {
   if (this.props.match.params.teamId !== nextProps.match.params.teamId) {
     this.props.fetchTeamTasks(nextProps.match.params.teamId);
   }
 }

  update(taskId,field) {
    return (e) => {
      this.props.updateReduxTask({id: [taskId], [field]: e.currentTarget.value});
      const toBePersisted = e.currentTarget.value;
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
        this.timeout = setTimeout(()=> {
          this.props.updateTask({id: [taskId], [field]: toBePersisted});
        }, 200);
      };
  }



  currentTeamName() {
    if (Object.values(this.props.currentTeams).length && this.props.match.params.teamId) {
      if (this.props.currentTeams[this.props.match.params.teamId]) {
        return this.props.currentTeams[this.props.match.params.teamId].team_name;
      }
    }
  }

  currentTeamMember() {
    if (this.props.users && this.props.match.params.userId) {
      if (this.props.users[this.props.match.params.userId]) {
        return (`${this.props.users[this.props.match.params.userId].name}'s`);
      }
    } else {
      return ("My");
    }

  }

  render() {
    const { tasks } = this.props;
    const taskIndexLinks = tasks.map(task =>
      <div className="task-index-item-wrapper">
        <Link className="index-link"to={`/team/${task.team_id}/users/${task.assignee_id}/tasks/${task.id}`}
        component = {TaskFormContainer}>
        <div className ="for-line-under-circle">
          <div className="check-circle">
            <svg className="task-index-check" viewBox="0 0 32 32">
              <polygon points="27.672,4.786 10.901,21.557 4.328,14.984 1.5,17.812 10.901,27.214 30.5,7.615 "/>
            </svg>
          </div>
        </div>
        <input type="text"
          value={task.task_name}
          onChange= {this.update(task.id,'task_name')}
          className="task-index-row-name-inputs"
          placeholder="Add a task name"
          />
        </Link>
      </div>
    );

    return (
      <div className="main-content">
        <div className="main-content-header">{this.currentTeamMember()} tasks in {this.currentTeamName()}</div>
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
