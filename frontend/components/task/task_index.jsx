import React from "react";
import { Route, Link, withRouter } from 'react-router-dom';
import TaskFormContainer from './task_form_container';
import { dueDate, dueDateClass } from './date';
import { checkmark } from '../svgs/svgs';
import { flashCompletion } from './flash'

export class TaskIndex extends React.Component {
  constructor(props) {
    super(props);
    this.timeout = null;
    this.currentTeamName = this.currentTeamName.bind(this);
    this.currentTeamMember = this.currentTeamMember.bind(this);
    this.createNewTask = this.createNewTask.bind(this);
    this.completeTask = this.completeTask.bind(this);
  }

  componentDidMount () {
    if (this.props.match.params.userId) {
      this.props.fetchUserTasks(this.props.match.params.userId, this.props.match.params.teamId);
    } else {
      this.props.fetchTeamTasks(this.props.match.params.teamId);
    }

    this.props.fetchTeam(this.props.match.params.teamId);
    this.props.fetchTeamMembers(this.props.match.params.teamId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId &&
        this.props.match.params.userId !==
        nextProps.match.params.userId) {
        this.props.fetchUserTasks(nextProps.match.params.userId, this.props.match.params.teamId);
      } else {
        if (this.props.match.params.teamId !== nextProps.match.params.teamId) {
          this.props.fetchTeamTasks(nextProps.match.params.teamId);
        }
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
        }, 500);
      };
  }

  completeTask(taskId, completedStatus) {
    this.props.updateTask({id: [taskId], completed: !(completedStatus)});
    flashCompletion(completedStatus, taskId);
  }



  currentTeamName() {
    if (Object.values(this.props.teams).length && this.props.match.params.teamId) {
      if (this.props.teams[this.props.match.params.teamId]) {
        return this.props.teams[this.props.match.params.teamId].team_name;
      }
    }
  }

  currentTeamMember() {
    if (this.props.match.params.userId) {
      if (this.props.users[this.props.match.params.userId] === this.props.currentUser) {
        return ("My");
      } else if (this.props.users[this.props.match.params.userId]) {
        return (`${this.props.users[this.props.match.params.userId].name}'s`);
      }
    } else {
      return ("Team");
    }

  }

  createNewTask() {
    const assigneeId = this.props.match.params.userId ? this.props.match.params.userId : this.props.currentUser.id;
    this.props.createTask(
      {
        task_name: "",
        description: "",
        due_date: '',
        completed: false,
        assignee_id: assigneeId,
        team_id: this.props.match.params.teamId
      }
    ).then(
      payload => {
        if (this.props.match.params.userId) {
          this.props.history.push(
            `/team/${this.props.match.params.teamId}/users/${this.props.match.params.userId}/tasks/${payload.task.id}`
          );
        }
    });
  }

  render() {
    const { tasks } = this.props;
    const taskIndexLinks = tasks.map(task =>
      <div className={this.props.match.params.taskId === task.id.toString() ? "task-index-item-selected" : "task-index-item-wrapper"} key={task.id}>
        <div className={`flash ${task.id}`}/>
        <div className ="for-line-under-circle">
          <div className={task.completed ? `checked-circle ${task.id}` : `check-circle ${task.id}`}
            onClick={()=>this.completeTask(task.id, task.completed)}>
            {checkmark(task.completed ? "checked-task-index-check" : "task-index-check")}
          </div>
        </div>
        <Link to={`/team/${task.team_id}/users/${task.assignee_id}/tasks/${task.id}`}
          className="index-link"
          draggable="false">

          <input type="text"
            autoFocus
            value={task.task_name}
            onChange= {this.update(task.id,'task_name')}
            className={task.completed ? "task-index-row-name-inputs-completed" : `task-index-row-name-inputs ${task.id}`}
            placeholder="Write a task name"
            />
        </Link>
        <div className="dateWrapper">
            <div className={dueDateClass(task)}>{dueDate(task)}</div>
            <input
            type="date"
            className="index-date-input"
            value={task.due_date? task.due_date.slice(0,10) : "" }
            onChange={this.update(task.id,'due_date')}
            />
        </div>
      </div>
    );

    return (
      <div className="main-content">
        <div className="main-content-header">{this.currentTeamMember()} Tasks in {this.currentTeamName()}</div>
        <div className="task-wrapper">
          <div className={this.props.match.params.taskId ? "task-index-condensed" : "task-index"}>
            <div className="task-index-header">
              <div onClick={this.createNewTask} className="add-task-button">Add Task</div>
            </div>
            {taskIndexLinks}
            <div className="task-index-filler"></div>
          </div>
        </div>
      </div>
    );
  }

}

export default withRouter(TaskIndex);
