import React from "react";
import { Link, withRouter } from 'react-router-dom';
import Textarea from "react-textarea-autosize";
import { dueDate, dueDateClass } from './date';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.completeTask = this.completeTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.clearDate = this.clearDate.bind(this);
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

  closeForm() {
      this.props.history.push(
        `/team/${this.props.match.params.teamId}/users/${this.props.match.params.userId}`
      )
  }

  clearDate() {
      this.props.updateTask({id: [this.props.match.params.taskId], due_date: ""})
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
            onClick={()=> this.closeForm()}>&times;</div>

        </div>
      <form className="task-form-content">
        <Textarea
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
            <div className={task && task.due_date? "due-dated-heading" : "due-date-heading"}>Due Date</div>
            <div className={dueDateClass(task)}>{dueDate(task)}</div>
        </div>
        <input
            type="date"
            className="date-input"
            value={task && task.due_date? task.due_date.slice(0,10) : "" }
            onChange={this.update('due_date')}
        />
        <div className={task && task.due_date ? "clear-date-button" : "cleared-date-button"} onClick={() => this.clearDate()}>
            <svg focusable="false" viewBox="0 0 32 32">
              <polygon points="24.485,27.314 27.314,24.485 18.828,16 27.314,7.515 24.485,4.686 16,13.172 7.515,4.686 4.686,7.515 13.172,16 4.686,24.485 7.515,27.314 16,18.828 ">
              </polygon>
            </svg>
        </div>
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
