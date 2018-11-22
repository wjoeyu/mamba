import React from "react";
import { Link, withRouter } from 'react-router-dom';
import Textarea from 'react-textarea-autosize';
import { dueDate, dueDateClass } from './date';
import { flashCompletion } from "./flash";
import { closeX, calendar, clear, checkmark, descIcon, assigneeIcon } from '../svgs/svgs';
import { memberInitials } from '../main_page/avatar';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assigneeDropdownVisible: false
    };
    this.completeTask = this.completeTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.clearAttr = this.clearAttr.bind(this);
    this.openAssigneeDropdown = this.openAssigneeDropdown.bind(this);
    this.assigneeName = this.assigneeName.bind(this);
    this.timeout = null;
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.handleOutsideDropdown = this.handleOutsideDropdown.bind(this);

  }

  toggleVisibility() {
    if(!this.state.assigneeDropdownVisible) {
      document.addEventListener("click", this.handleOutsideDropdown);
    } else {
      document.removeEventListener("click", this.handleOutsideDropdown);
    }

    this.setState({assigneeDropdownVisible: !this.state.assigneeDropdownVisible});
  }

  handleOutsideDropdown(e) {
    if(this.node.contains(e.target)) {
      return;
    }
    this.toggleVisibility();
  }

  completeTask(completedStatus) {
    this.props.updateTask({id: [this.props.match.params.taskId], completed: !(completedStatus)});
    flashCompletion(completedStatus, this.props.match.params.taskId);
  }

  removeTask() {
    this.props.delTask(this.props.match.params.taskId).then(this.props.history.push(
      this.props.match.params.userId ?
      `/team/${this.props.match.params.teamId}/users/${this.props.match.params.userId}`
      : `/team/${this.props.match.params.teamId}`));
  }

  update(field) {
    return (e) => {
      this.props.updateReduxTask({id: this.props.match.params.taskId, [field]: e.currentTarget.value});
      const toBePersisted = e.currentTarget.value;
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
        this.timeout = setTimeout(()=> {
          this.props.updateTask({id: this.props.match.params.taskId, [field]: toBePersisted});
        }, 200);
      };
  }

  assign(id) {
    this.props.updateTask({id:this.props.match.params.taskId, assignee_id: id});
  }

  closeForm() {
      const taskFormSlide = document.getElementsByClassName('task-form')[0];
      taskFormSlide.classList.add('task-form-out');
      setTimeout(() => {
          taskFormSlide.classList.remove('task-form-out');
          this.props.history.push(
            this.props.match.params.userId ?
            `/team/${this.props.match.params.teamId}/users/${this.props.match.params.userId}` :
            `/team/${this.props.match.params.teamId}`)
        },480);
  }

  clearAttr(attribute) {
      this.props.updateTask({id: this.props.match.params.taskId, [attribute]: null})
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

  render() {
    const { task, teamMembers } = this.props;
    const newAssignees = Object.values(teamMembers).map(newAssignee => {
      return (
        <button
          className="new-assignee-item"
          key={newAssignee.id}
          onClick={() => this.assign(newAssignee.id)}>
          <div className="new-assignee-avatar-circle">
            {memberInitials(newAssignee.name)}
          </div>
          <div>
            <div className="new-assignee-name">{newAssignee.name}</div>
            <div className="new-assignee-email">{newAssignee.email}</div>
          </div>
        </button>
      );
    });

    return (
      <div className='task-form'>
        <div className="task-form-header">
          <div className="task-form-header-left">
            <button
              onClick={()=>this.completeTask(task.completed)}
              className={(task && task.completed)? "completed-button" : "completion-button"}>
                {checkmark((task && task.completed)? "completed-check" : "check-mark")}
                {(task && task.completed)? "Completed" : "Mark Complete"}</button>
            <button className="deletion-button" onClick={()=>this.removeTask()}>Delete Task</button>
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

            <button
              className="assignee-button"
              onClick={this.toggleVisibility}
              ref={ node => this.node = node }>
                <div
                  className={ task && task.assignee_id ?
                    "avatar-circle" :
                    "dotted-circle"}>
                  { task &&
                    teamMembers[task.assignee_id] &&
                    teamMembers[task.assignee_id].name ?
                      memberInitials(teamMembers[task.assignee_id].name) :
                      assigneeIcon("assignee-icon")}
                </div>
                <div className ="due-date">
                  <div className={task && task.assignee_id ? "button-heading" : "unassigned"}>
                  {task && task.assignee_id ? "Assigned To" : "Unassigned"}</div>
                  <div className="assignee-name">{this.assigneeName()}</div>
                </div>
                <div
                  className={task && task.assignee_id ? "clear-date-button" : "cleared-date-button"}
                  onClick={
                    (e) => {
                      this.clearAttr("assignee_id");
                      e.stopPropagation();
                    }
                  }>
                  {clear()}
                </div>
                <div className={this.state.assigneeDropdownVisible ? "assignee-list" : "assignee-list-hidden"}>
                  {newAssignees}
                </div>
            </button>

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
              <button
                className={task && task.due_date ? "clear-date-button" : "cleared-date-button"}
                onClick={() => this.clearAttr("due_date")}>
                {clear()}
              </button>
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
