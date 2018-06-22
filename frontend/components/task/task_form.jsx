import React from "react";
import { Link, withRouter } from 'react-router-dom';
import Textarea from "react-textarea-autosize";
import { dueDate, dueDateClass } from './date';
import { flashCompletion } from "./flash";
import { closeX, calendar, clear, checkmark, descIcon, assigneeIcon } from '../svgs/svgs';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.completeTask = this.completeTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.clearAttr = this.clearAttr.bind(this);
    this.openAssigneeDropdown = this.openAssigneeDropdown.bind(this);
    this.assigneeInitials = this.assigneeInitials.bind(this);
    this.assigneeName = this.assigneeName.bind(this);
    this.timeout = null;
  }

  completeTask(completedStatus) {
    this.props.updateTask({id: [this.props.match.params.taskId], completed: !(completedStatus)});
    flashCompletion(completedStatus, this.props.match.params.taskId);
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
      const taskFormSlide = document.getElementsByClassName('task-form')[0];
      taskFormSlide.classList.add('task-form-out');
      setTimeout(() => {
          taskFormSlide.classList.remove('task-form-out');
          this.props.history.push(
            `/team/${this.props.match.params.teamId}/users/${this.props.match.params.userId}`)
        },480);
  }

  clearAttr(attribute) {
      debugger
      this.props.updateTask({id: [this.props.match.params.taskId], [attribute]: ""})
  }

  assigneeInitials() {
      if (this.props.task && this.props.task.assignee_id) {
        if (this.props.teamMembers[this.props.task.assignee_id]) {
          return this.props.teamMembers[this.props.task.assignee_id].name.split(" ").map(el=>el[0]).join("");
        }
      }
  }

  assigneeName() {
      if (this.props.task && this.props.task.assignee_id) {
        if (this.props.teamMembers[this.props.task.assignee_id]) {
          return this.props.teamMembers[this.props.task.assignee_id].name;
        }
      }
  }

  openAssigneeDropdown() {
      this.props.fetchTeamMembers(this.props.match.params.teamId);
  }

  // <div
  //   className={task && task.assignee_id ? "clear-date-button" : "cleared-date-button"}
  //   onClick={() => this.clearAttr("assignee_id")}>
  //   {clear()}
  // </div>

  render() {
    const { task } = this.props;

    return (
      <div className='task-form'>
        <div className="task-form-header">
          <div className="task-form-header-left">
            <div
              onClick={()=>this.completeTask(task.completed)}
              className={(task && task.completed)? "completed-button" : "completion-button"}>
                {checkmark((task && task.completed)? "completed-check" : "check-mark")}
                {(task && task.completed)? "Completed" : "Mark Complete"}</div>
            <div className="deletion-button" onClick={()=>this.removeTask()}>Delete Task</div>
          </div>
          <div className="task-form-close"
            onClick={()=> this.closeForm()}>
            {closeX()}
          </div>

        </div>
        <form className="task-form-content">
          <Textarea
            value={task ? task.task_name : ""}
            onChange={this.update('task_name')}
            className="task-form-name"
            placeholder="Write a task name"
          />
          <div className="assignee-due-date">

            <div className="assignee-button" onClick={() => window.alert("assign member coming soon")}>
                <div
                  className={ task && task.assignee_id ? "avatar-circle" : "dotted-circle"}>
                  { task && task.assignee_id ? this.assigneeInitials() : assigneeIcon("assignee-icon")}
                </div>
                <div className ="due-date">
                  <div className={task && task.assignee_id ? "button-heading" : "unassigned"}>
                  {task && task.assignee_id ? "ASSIGNED TO" : "Unassigned"}</div>
                  <div className="assignee-name">{this.assigneeName()}</div>
                </div>
            </div>

            <div className="date-button">
              <div className={ task && task.due_date? "calendar-circle" : "dotted-circle"}>
                {calendar("due-date-calendar")}
              </div>
              <div className ="due-date">
                <div className={task && task.due_date? "button-heading" : "unassigned"}>Due Date</div>
                <div className={dueDateClass(task)}>{dueDate(task)}</div>
              </div>
              <input
                type="date"
                className="date-input"
                value={task && task.due_date? task.due_date.slice(0,10) : "" }
                onChange={this.update('due_date')}
              />
              <div
                className={task && task.due_date ? "clear-date-button" : "cleared-date-button"}
                onClick={() => this.clearAttr("due_date")}>
                {clear()}
              </div>
            </div>

          </div>
          <div className="form-spacer">
            {descIcon()}
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
