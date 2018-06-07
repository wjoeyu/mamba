import React from "react";
import { Link, withRouter } from 'react-router-dom';
import Textarea from "react-textarea-autosize";

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.completeTask = this.completeTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.dueDate = this.dueDate.bind(this);
    this.timeout = null;
  }

  completeTask(completedStatus) {
    this.props.updateTask({id: [this.props.match.params.taskId], completed: !(completedStatus)});
  }

  removeTask() {
    this.props.delTask(this.props.match.params.taskId).then(this.props.history.push(
      `/team/${this.props.match.params.teamId}/users/${this.props.match.params.userId}`));
  }

  update(field) {
    return (e) => {
      this.props.updateReduxTask({id: [this.props.match.params.taskId], [field]: e.currentTarget.value});
      const toBePersisted = e.currentTarget.value;
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
        this.timeout = setTimeout(()=> {
          this.props.updateTask({id: [this.props.match.params.taskId], [field]: toBePersisted});
        }, 200);
      };
  }

  dueDate() {
    const dueDate = this.props.task && this.props.task.due_date ?
      new Date(this.props.task.due_date.replace(/-/g, '\/').replace(/T.+/, '')).toString(): "";

    const today = new Date().toString();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    if (today.slice(4,10) === dueDate.slice(4,10)) {
      return "Today";
    } else if (tomorrow.toString().slice(4,15) === dueDate.slice(4,15)) {
      return "Tomorrow";
    } else if (yesterday.toString().slice(4,15) === dueDate.slice(4,15)) {
      return "Yesterday";
    } else if (today.toString().slice(11,15) !== dueDate.slice(11,15)) {
      let splitDate = dueDate.slice(4,15).split(" ");
      if (splitDate[1]) {
        if(splitDate[1].length === 2 && splitDate[1][0] === "0") {
          splitDate[1] = splitDate[1].slice(1,2) + ",";
        } else {
          splitDate[1] = splitDate[1] + ",";
        }
      }
      return splitDate.join(" ");
    } else if (today.toString().slice(11,15) === dueDate.slice(11,15)) {
      let splitDate = dueDate.slice(4,11).split(" ");
      if (splitDate[1]) {
        if(splitDate[1].length === 2 && splitDate[1][0] === "0") {
          splitDate[1] = splitDate[1].slice(1,2);
        }
      }
      return splitDate.join(" ");
    }
  }

  render() {
    const { task } = this.props;

    return (
      <div className='task-form'>
        <div className="task-form-header">

          <div onClick={()=>this.completeTask(task.completed)} className={(task && task.completed)? "completed-button" : "completion-button"}>
            <svg className={(task && task.completed)? "completed-check" : "check-mark"}
              viewBox="0 0 32 32">
              <polygon points="27.672,4.786 10.901,21.557 4.328,14.984 1.5,17.812 10.901,27.214 30.5,7.615 "/>
            </svg>
            {(task && task.completed)? "Completed" : "Mark Complete"}</div>

          <div className="deletion-button" onClick={()=>this.removeTask()}>Delete</div>

          <div className="task-form-close"
            onClick={()=> this.props.history.push(
              `/team/${this.props.match.params.teamId}/users/${this.props.match.params.userId}`
            )}>&times;</div>

        </div>
      <form className="task-form-content">
        <input type="text"
          value={task ? task.task_name : ""}
          onChange={this.update('task_name')}
          className="task-form-name"
          placeholder="Write a task name"
        />

      <div className="date-button">
        <div className={ task && task.due_date? "calendar-circle" : "dotted-calendar-circle"}>
          <svg className="due-date-calendar" viewBox="0 0 32 32">
            <rect x="16" y="16" width="2" height="2"></rect>
            <rect x="20" y="16" width="2" height="2"></rect>
            <rect x="20" y="20" width="2" height="2"></rect>
            <rect x="16" y="20" width="2" height="2"></rect>
            <rect x="8" y="20" width="2" height="2"></rect>
            <rect x="8" y="24" width="2" height="2"></rect>
            <rect x="16" y="24" width="2" height="2"></rect>
            <rect x="12" y="16" width="2" height="2"></rect>
            <rect x="12" y="20" width="2" height="2"></rect>
            <rect x="12" y="24" width="2" height="2"></rect>
            <path d="M22,2V0h-2v2h-8V0h-2v2H2v30h28V2H22z M28,30H4V12h24V30z M28,10H4V4h6v2h2V4h8v2h2V4h6V10z"></path>
          </svg>
        </div>
          <div className ="due-date">
            <div className="due-date-heading">Due Date</div>
            <div className="parsed-date">{this.dueDate()}</div>
          </div>
          <input
            type="date"
            className="date-input"
            value={task && task.due_date? task.due_date.slice(0,10) : "" }
            onChange={this.update('due_date')}
            />
      </div>

        <div className="form-spacer">
        <svg className ="desc-icon" viewBox="0 0 32 32">
          <path d="M26,8H2V6h24V8z M22,12H2v2h20V12z M28,18H2v2h26V18z M24,24H2v2h22V24z"></path>
        </svg>
        <Textarea
          value={task ? task.description : ""}
          onChange={this.update('description')}
          className="task-form-description"
          placeholder="Description"
          />
        </div>
      </form>
    </div>
    );
  }
}

export default withRouter(TaskForm);
