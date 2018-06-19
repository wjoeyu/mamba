import React from "react";
import { Link, withRouter } from 'react-router-dom';
import Textarea from "react-textarea-autosize";
import { dueDate, dueDateClass } from './date';
import { closeX, calendar, clear, checkmark, descIcon } from '../svgs/svgs';

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
      const taskFormSlide = document.getElementsByClassName('task-form')[0];
      taskFormSlide.classList.add('task-form-out');
      setTimeout(() => {
          taskFormSlide.classList.remove('task-form-out');
          this.props.history.push(
            `/team/${this.props.match.params.teamId}/users/${this.props.match.params.userId}`)
        },480);
  }

  clearDate() {
      this.props.updateTask({id: [this.props.match.params.taskId], due_date: ""})
  }

  render() {
    const { task } = this.props;

    return (
      <div className='task-form'>
        <div className="task-form-header">
            <div className="task-form-header-left">
              <div onClick={()=>this.completeTask(task.completed)} className={(task && task.completed)? "completed-button" : "completion-button"}>
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

      <div className="date-button">
        <div className={ task && task.due_date? "calendar-circle" : "dotted-calendar-circle"}>
          {calendar("due-date-calendar")}
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
            {clear()}
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
